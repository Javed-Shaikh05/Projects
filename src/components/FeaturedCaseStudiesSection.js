'use client'

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FeaturedCaseStudiesSection() {
  const allCaseStudies = [
    {
      title: "L-Shaped Anamorphic Screen Installation at IMTEX 2025 – Cosmos Stall",
      videoId: "z-oOZENHFZo",
      description:
        "Showcasing innovation with our eye-catching anamorphic LED display at the Cosmos stall, drawing attention at one of India’s premier manufacturing exhibitions.",
    },
    {
      title: "Bank of India Corporate Shoot at Tata Marathon 2025 – Mumbai",
      videoId: "vC9eU3O8wXA",
      description:
        "Captured inspiring moments as BOI employees ran with purpose—promoting both health and brand presence at India’s biggest marathon event.",
    },
    {
      title: "Transit Takeover for Tech Startup",
      videoId: "m1sm5h9KnWw",
      description:
        "DOOH ads on buses and trains, capturing a wide, on-the-go audience effectively.",
    },
    {
      title: "Mall Domination for Food Brand",
      videoId: "GghZjgYnunY",
      description:
        "Full-scale DOOH wraps and interactive stands driving significant in-mall traffic.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const step = 2
  const visibleCaseStudies = allCaseStudies.slice(currentIndex, currentIndex + step)

  const handleNext = () => {
    setCurrentIndex(currentIndex + step >= allCaseStudies.length ? 0 : currentIndex + step)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header with Animation */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-800 inline-block mb-2">
              Spotlight
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Success Stories in Focus
            </h2>
            <p className="text-gray-600 max-w-md mt-2">
              A glimpse into our most impactful campaigns, each meticulously aligned with unique brand goals.
            </p>
          </div>
          <motion.div
            className="flex items-center gap-3 mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              aria-label="Next Button"
              onClick={handleNext}
              className="outline-none p-2.5 rounded-md text-gray-700 transition ease-linear bg-gray-200 hover:bg-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Case Studies with Animations */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {visibleCaseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row border rounded-md overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <iframe
                  src={`https://www.youtube.com/embed/${study.videoId}?modestbranding=1&rel=0`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={study.title}
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600">{study.description}</p>
                <Link
                  href="/case-studies"
                  className="mt-4 inline-block text-orange-500 hover:text-orange-600"
                >
                  View Full Case Study
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
