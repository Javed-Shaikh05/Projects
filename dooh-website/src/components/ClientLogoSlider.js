'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  "/logos/Ajanta Pharma.webp",
  "/logos/AmiPoly.webp",
  "/logos/Argen.webp",
  "/logos/Bajaj.webp",
  "/logos/BOI.webp",
  "/logos/Borosil.webp",
  "/logos/Cosmos.webp",
  "/logos/DP.webp",
  "/logos/Goel.webp",
  "/logos/GOG.webp",
  "/logos/LaserT.webp",
  "/logos/nbc.webp",
  "/logos/SolutionOne.webp",
  "/logos/Zuventus.webp",
]

export default function ClientLogoSlider() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section with Motion */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-800 mb-3">
            Trusted Partnerships
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Trusted by Top Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Collaborating with industry pioneers and innovative disruptors to deliver cutting-edge digital solutions
          </p>
        </motion.div>

        {/* Logo Marquee Section with Motion */}
        <motion.div
          className="overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-16 animate-marquee">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-40 h-32 flex items-center justify-center shrink-0 p-4"
              >
                <div className="relative w-full h-full bg-transparent">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain grayscale opacity-80 hover:opacity-100 transition"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(calc(-100% / 3), 0, 0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: calc(300% + 4rem);
          will-change: transform;
          backface-visibility: hidden;
          display: flex;
        }
      `}</style>
    </section>
  )
}
