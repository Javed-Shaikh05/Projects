// components/HeroSection.js

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background image */}
      <div className="absolute w-full h-full z-[-1]">
        <Image
          src="/images/hero-bg2.webp"
          alt="Digital Out-of-Home"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay Content with Text Animation */}
      <motion.div
        className="relative text-center px-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 text-white text-stroke"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your Partner in Digital Out-of-Home
        </motion.h1>

        <motion.p
          className="max-w-xl mx-auto mb-6 text-lg md:text-xl font-medium text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Engage audiences nationwide with real-time analytics and interactive
          DOOH solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md text-lg font-semibold transition text-white"
          >
            Discover How
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
