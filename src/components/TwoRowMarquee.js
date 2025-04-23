'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const topRowImages = [
  "/images/image (1).webp",
  "/images/image (2).webp",
  "/images/image (3).webp",
  "/images/image (4).webp",
  "/images/image (5).webp",
  "/images/image (6).webp",
]

const bottomRowImages = [
  "/images/image (7).webp",
  "/images/image (8).webp",
  "/images/image (9).webp",
  "/images/image (10).webp",
  "/images/image (11).webp",
  "/images/image (4).webp",
]

export default function TwoRowMarquee() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading & Description with Framer Motion */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-sky-800">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Immersive Works in Action
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            A curated look at our campaigns, spotlighting their impact across varied environments.
          </p>
        </motion.div>

        {/* Two-row marquee container */}
        <div className="space-y-8">
          
          {/* ===== Top Row ===== */}
          <div className="relative h-40 sm:h-48 md:h-64 w-full overflow-hidden bg-gray-50 rounded-md">
            <div className="absolute inset-0 flex min-w-[200%] animate-marquee-left">
              {[...topRowImages, ...topRowImages].map((src, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex-shrink-0 p-2 box-border w-1/2 sm:w-1/3 md:w-1/6"
                >
                  <Image
                    src={src}
                    alt={`Top item ${idx}`}
                    fill
                    className="object-cover rounded border border-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== Bottom Row ===== */}
          <div className="relative h-40 sm:h-48 md:h-64 w-full overflow-hidden bg-gray-50 rounded-md">
            <div className="absolute inset-0 flex min-w-[200%] animate-marquee-right">
              {[...bottomRowImages, ...bottomRowImages].map((src, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex-shrink-0 p-2 box-border w-1/2 sm:w-1/3 md:w-1/6"
                >
                  <Image
                    src={src}
                    alt={`Bottom item ${idx}`}
                    fill
                    className="object-cover rounded border border-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Animations */}
      <style jsx>{`
        @keyframes marqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes marqueeRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 25s linear infinite reverse;
        }
      `}</style>
    </section>
  )
}
