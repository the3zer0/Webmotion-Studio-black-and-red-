import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ArrowUpRight, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Container } from "../common/Container";
import { GlowLink } from "../buttons/GlowButton";
import { navigationLinks } from "../../data/navigation";
import { MobileMenu } from "./MobileMenu";

const serviceLinks = [
  { label: "Video Editing", href: "/video-editing" },
  { label: "Graphics Design", href: "/graphics-design" },
  { label: "Web Development", href: "/web-development" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openServices = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    setServicesOpen(true);
  };

  const closeServices = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 120);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    setServicesOpen(false);

    if (href === "#top" || href === "/") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);

      if (elem) {
        const headerOffset = 90;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const headerOffset = 90;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#1a1a1a]/85 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-[88px] items-center justify-between">

        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group flex flex-col leading-none"
        >
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex flex-col leading-none"
          >
            <span className="font-display text-lg font-bold tracking-[0.35em] text-white">
              WEBMOTION.
            </span>

            <span className="mt-1 text-[11px] font-medium tracking-[0.55em] text-neutral-500 transition-colors duration-300 group-hover:text-[#ff6b35]">
              STUDIO
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigationLinks.map((item) => (
            item.label === "Services" ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
              >
                <motion.button
                  type="button"
                  onClick={(e) => handleNavClick(e, "#services")}
                  whileHover={{ y: -2 }}
                  className="group relative flex items-center gap-2 text-[13px] uppercase tracking-[0.28em] text-neutral-400 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#ff6b35] transition-all duration-300 group-hover:w-full" />
                </motion.button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-[24px] border border-white/10 bg-[#1a1a1a] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.label}
                          to={service.href}
                          className="flex items-center justify-between rounded-[18px] px-4 py-3 text-sm text-[#f5f5f5] transition-colors duration-300 hover:bg-white/5 hover:text-[#ff6b35]"
                          onClick={() => {
                            setServicesOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                        >
                          <span>{service.label}</span>
                          <ArrowUpRight size={15} className="text-[#ff6b35]" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ y: -2 }}
                className="group relative text-[13px] uppercase tracking-[0.28em] text-neutral-400 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#ff6b35] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            )
          ))}
        </nav>

        {/* CTA */}

        <div className="hidden lg:block">
          <GlowLink href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            Start Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </GlowLink>
        </div>

        {/* Mobile */}

        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#ff6b35] lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </Container>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        serviceLinks={serviceLinks}
        navigationLinks={navigationLinks}
        onNavClick={handleNavClick}
      />
    </header>
  );
}