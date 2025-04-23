"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThreeDViewer = dynamic(() => import("@/components/ThreeDViewer"), {
  ssr: false,
  loading: () => <div className="text-center">Loading...</div>
});

const serviceBlocks = [
  {
    title: "Motion Graphics",
    icon: "🎞️",
    description: "High‑energy visuals for advertisements, product intros, and DOOH campaigns.",
    brief: "Dynamic animated graphics that communicate your brand’s story with energy and flair.",
    type: "video",
    media: ["/videos/motion1.webm", "/videos/motion2.webm"]
  },
  {
    title: "2D & 3D Animation",
    icon: "🧩",
    description: "Storytelling through dimensional visuals for all platforms.",
    brief: "Bring characters, ideas, and concepts to life with captivating animation in two or three dimensions.",
    type: "video",
    media: ["/videos/2Danimation.webm", "/videos/3Danimation2.webm", "/videos/3Danimation.webm"]
  },
  {
    title: "CGI (Computer‑Generated Imagery)",
    icon: "🎨",
    description: "Photorealistic renders to enhance product appeal and realism.",
    brief: "Use digital artistry to craft ultra‑realistic visuals for advertising and storytelling.",
    type: "image",
    media: ["/images/cgi1.webp", "/images/cgi2.webp"]
  },
  {
    title: "Anamorphic Design",
    icon: "🌀",
    description: "Immersive illusions tailored for large‑scale DOOH.",
    brief: "Create mind‑bending 3‑D illusions that mesmerize viewers on large digital screens.",
    type: "video",
    media: ["/videos/anamorphic1.mp4", "/videos/anamorphic2.mp4"]
  },
  {
    title: "Product Application Videos",
    icon: "📹",
    description: "Showcase your product in real‑world use cases.",
    brief: "Highlight the value and versatility of your product through engaging demo videos.",
    type: "video",
    media: ["/videos/product-app1.mp4"]
  },
  {
    title: "Digital Greetings",
    icon: "🎊",
    description: "Festive and brand‑specific animated greetings.",
    brief: "Celebrate special moments with beautifully animated greeting messages tailored to your brand.",
    type: "video",
    media: ["/videos/greeting1.mp4"]
  },
  {
    title: "Corporate Shoots",
    icon: "🏢",
    description: "Professional shoots for business branding and communication.",
    brief: "Crisp, high‑quality visuals that represent your corporate identity with professionalism.",
    type: "image",
    media: ["/images/corporate1.jpg", "/images/corporate2.jpg"]
  },
  {
    title: "Product Shoots",
    icon: "📸",
    description: "Capture your product from its best angle with studio‑quality images.",
    brief: "Visual storytelling that puts your product in the spotlight with stunning photography.",
    type: "image",
    media: ["/images/product1.jpg", "/images/product2.jpg"]
  }
];

export default function ContentCreationPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-black scroll-smooth">
        {/* Hero Section */}
        <section className="relative py-32 px-6 text-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
              src="/videos/hero-bg.webm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00acd7]/60 to-[#341f9b]/70" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">We Bring Brands to Life with Stunning Visual Content</h1>
            <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto">
              From motion graphics to anamorphic illusions — explore our powerful storytelling in every frame.
            </p>
            <Link
              href="#services"
              className="mt-6 inline-block bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
            >
              See Our Work
            </Link>
          </motion.div>
        </section>

        {/* Why Content Matters Section */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Content Creation Matters</h2>
            <p className="text-lg text-gray-600">
              In today's attention-driven world, impactful visual content is the currency of brand storytelling. From social
              media to out-of-home campaigns, great content captivates, engages, and converts. Whether it's a motion graphic
              for Instagram or an anamorphic illusion on a billboard, investing in strong visuals empowers your brand to
              rise above the noise.
            </p>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 space-y-24">
          {serviceBlocks.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
                <span>{service.icon}</span> {service.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4">{service.description}</p>
              <p className="text-base text-gray-500 mb-8">{service.brief}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.media.map((src, i) =>
                  service.type === "video" ? (
                    <video key={i} src={src} controls preload="none" className="rounded-xl shadow-md w-full h-auto" />
                  ) : (
                    <Image
                      key={i}
                      src={src}
                      alt={service.title}
                      width={800}
                      height={500}
                      className="rounded-xl shadow-md w-full h-auto object-cover"
                      loading="lazy"
                    />
                  )
                )}
              </div>

              {service.title === "2D & 3D Animation" && (
                <div className="py-20">
                  <h3 className="text-3xl font-bold mb-8 text-center">🧩 Interactive 3D Models</h3>
                  <p className="text-lg text-center text-gray-500 mb-12">
                    Experience our product designs in real‑time 3‑D. Rotate, zoom, and explore each creation.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {["model1.glb", "model2.glb"].map((model, i) => (
                      <div key={i} className="relative w-full h-[400px] sm:h-[500px] bg-[#181a2a] rounded-xl shadow-md">
                        <ThreeDViewer modelUrl={`/assets/models/${model}`} scale={[1.5, 1.5, 1.5]} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 bg-[#1a1b3a] text-white">
          <h2 className="text-4xl font-bold mb-4">Let’s Create Magic Together</h2>
          <p className="text-lg mb-6">Got a vision? We'll bring it to life with world‑class visuals.</p>
          <Link
            href="/contact"
            className="bg-white text-[#341f9b] px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            Start Your Project
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
