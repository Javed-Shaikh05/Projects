"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HyperlocalMarketingPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hyper-local Marketing Solutions</h1>
            <p className="text-lg md:text-xl mb-6">
              Drive real-world engagement by reaching your audience exactly where they are — locally, strategically, and effectively.
            </p>
            <Link href="/contact" className="bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition">
              Start Your Local Campaign
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Why Hyper-local Marketing Works</h2>
              <p className="text-gray-700 mb-4">
                Whether you're a retail store, food chain, healthcare brand, or a national business trying to go regional — hyper-local targeting boosts relevance and trust.
              </p>
              <ul className="space-y-4 text-gray-800">
                <li>✅ <strong>Increased Brand Awareness:</strong> Show up where it matters most — on screens in your customer’s own neighborhood.</li>
                <li>✅ <strong>Higher Conversion Rates:</strong> Locally relevant ads lead to faster decisions and better engagement.</li>
                <li>✅ <strong>Enhanced Customer Loyalty:</strong> Build long-term loyalty with your community by showing up consistently in their day-to-day journey.</li>
                <li>✅ <strong>Cost Efficiency:</strong> Avoid national-level waste and spend smartly with geo-targeted screens and formats.</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <Image 
                src="/images/hyperlocal-map.jpg" 
                alt="Hyperlocal Marketing Coverage Map" 
                width={600} 
                height={400} 
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Case Studies Carousel */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Successful Hyper-local Campaigns</h2>
            <p className="text-gray-600 mb-10">
              Brands that connected deeply with local audiences — one neighborhood at a time.
            </p>

            <div className="relative">
              <Swiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  nextEl: ".swiper-next",
                  prevEl: ".swiper-prev",
                }}
                className="!px-4"
              >
                <SwiperSlide>
                  <Link href="/case-studies/kotak-811" className="block h-full">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full">
                      <Image
                        src="/images/casestudy-kotak811.jpg"
                        alt="Kotak 811 Local Café Campaign"
                        width={400}
                        height={250}
                        className="rounded-lg mb-4 w-full"
                      />
                      <h3 className="text-xl font-semibold mb-2">Kotak 811 × Coffee Cafés</h3>
                      <p className="text-gray-700 mb-2">DOOH campaign across 18 Pune cafés with reward-led QR engagement.</p>
                      <p className="text-sm text-gray-500">📈 37% boost in app downloads.</p>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/case-studies/dominos" className="block h-full">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full">
                      <Image
                        src="/images/casestudy-dominos.jpg"
                        alt="Domino’s Local Delivery Boost"
                        width={400}
                        height={250}
                        className="rounded-lg mb-4 w-full"
                      />
                      <h3 className="text-xl font-semibold mb-2">Domino’s × Apartment Screens</h3>
                      <p className="text-gray-700 mb-2">Weekend DOOH targeting in Hyderabad apartments led to sharp order lifts.</p>
                      <p className="text-sm text-gray-500">📈 22% order growth in 2 weeks.</p>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/case-studies/clinic-plus" className="block h-full">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition h-full">
                      <Image
                        src="/images/casestudy-clinicplus.jpg"
                        alt="Clinic Plus Hyperlocal Branding"
                        width={400}
                        height={250}
                        className="rounded-lg mb-4 w-full"
                      />
                      <h3 className="text-xl font-semibold mb-2">Clinic Plus × Retail Storefronts</h3>
                      <p className="text-gray-700 mb-2">Retail DOOH in Nashik focused on moms. Boosted trust & attention.</p>
                      <p className="text-sm text-gray-500">📈 18% lift in brand recall.</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>

            </div>

            <div className="mt-10">
              <Link
                href="/case-studies"
                className="inline-block bg-[#341f9b] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#00acd7] transition"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 bg-[#1a1b3a] text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto px-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Dominate Your Local Market?</h2>
            <p className="text-lg mb-6">
              Let us help you plan a powerful location-specific campaign with high impact and low waste.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
            >
              Book a Free Consultation
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
