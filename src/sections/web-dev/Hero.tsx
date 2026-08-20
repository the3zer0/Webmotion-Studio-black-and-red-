'use client'

import '../../styles/web-dev/hero.css'

const stats = [
  {
    value: '410+',
    label: 'Projects Delivered',
  },

  {
    value: '100+',
    label: 'Happy Clients Worldwide',
  },

  {
    value: '98%',
    label: 'Client Satisfaction',
  },

  {
    value: '5+',
    label: 'Years of Experience',
  },
]

export default function Hero() {
  const resumeHref = `${import.meta.env.BASE_URL}resume/web-developer-resume.pdf`

  return (

    <section id="about" className="web-hero">

      <div className="web-hero-glow" />

      <div className="web-hero-container">

        {/* LEFT */}

        <div className="web-content">

          <span className="web-tag">

            WEB DEVELOPMENT • DIGITAL EXPERIENCES

          </span>

          <div className="web-badge">

            <span>✦</span>

            <p>

              Modern Websites • Built For Growth

            </p>

          </div>

          <h1 className="web-title">

            WE CREATE

            <br />

            <span>WEBSITES</span>

            <br />

            THAT BUILD


            <br />

            TRUST

          </h1>

          <p className="web-description">

            We build modern, high-performance websites that help businesses establish credibility, generate leads, and convert visitors into paying customers through clean design, fast performance, and SEO-friendly development.

          </p>

          {/* Trust */}

          <div className="web-trust">

            {[
              'SEO Optimized',

              'Mobile Responsive',

              'Fast Loading',

              'Modern UI/UX',
            ].map((item) => (

              <span key={item}>

                ✓ {item}

              </span>

            ))}

          </div>

          {/* Buttons */}

          <div className="web-actions">

            <a
              href="#contact"
              className="btn-primary"
            >

              Start Project

            </a>

            <a
              href="#projects"
              className="btn-secondary"
            >

              View Projects

            </a>

            <a
              href={resumeHref}

              target="_blank"

              rel="noopener noreferrer"

              className="btn-secondary"
            >

              View Resume

            </a>

          </div>

          {/* Stats */}

          <div className="web-stats">

            {stats.map((stat) => (

              <div
                key={stat.label}
                className="web-stat"
              >

                <h3>

                  {stat.value}

                </h3>

                <p>

                  {stat.label}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="web-showcase">

          <div className="browser">

            <div className="browser-top">

              <div className="red" />

              <div className="yellow" />

              <div className="green" />

            </div>

            <div className="browser-image">

              <img
                src="/projects/maowa-me.jpg"

                alt="maowa.me"

                className="browser-img"
              />

            </div>

          </div>

          <div className="project-card">

            <p>

              FEATURED PROJECT

            </p>

            <h3>

              maowa.me

            </h3>

            <span>

              Personal portfolio website built with React, Tailwind CSS, modern animations and conversion-focused UI design.

            </span>

            <a
              href="https://maowa.me"

              target="_blank"

              rel="noopener noreferrer"
            >

              Visit Live Site →

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}