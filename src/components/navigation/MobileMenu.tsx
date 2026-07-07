import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type NavigationItem = {
	label: string;
	href: string;
};

type MobileMenuProps = {
	open: boolean;
	onClose: () => void;
	navigationLinks: NavigationItem[];
	serviceLinks: NavigationItem[];
};

export function MobileMenu({
	open,
	onClose,
	navigationLinks,
	serviceLinks,
}: MobileMenuProps) {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0, y: -12 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -12 }}
					transition={{ duration: 0.2, ease: "easeOut" }}
					className="border-t border-white/10 bg-[#1a1a1a] px-6 py-6 lg:hidden"
				>
					<div className="mx-auto flex max-w-7xl flex-col gap-4">
						{navigationLinks.map((item) =>
							item.label === "Services" ? (
								<div key={item.label} className="space-y-2">
									<p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
										Services
									</p>

									<div className="grid gap-2 pl-2">
										{serviceLinks.map((service) => (
											<Link
												key={service.label}
												to={service.href}
												onClick={onClose}
												className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#f5f5f5] transition-colors duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]"
											>
												<span>{service.label}</span>
												<ArrowUpRight size={15} className="text-[#ff6b35]" />
											</Link>
										))}
									</div>
								</div>
							) : (
								<a
									key={item.label}
									href={item.href}
									onClick={onClose}
									className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm uppercase tracking-[0.28em] text-[#f5f5f5] transition-colors duration-300 hover:border-[#ff6b35] hover:text-[#ff6b35]"
								>
									{item.label}
								</a>
							)
						)}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
