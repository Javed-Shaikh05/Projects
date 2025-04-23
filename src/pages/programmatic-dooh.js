// pages/programmatic-dooh.js
"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header"; // adjust path if needed
import Footer from "@/components/Footer"; // adjust path if needed

export default function ProgrammaticDoohPage() {
  return (
    <>
      <Header />

      <main className="text-white bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Revolutionizing DOOH with Programmatic Intelligence
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Reach your audience with real-time targeting, smart placements, and dynamic digital screens across India.
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
            >
              Start Your Campaign
            </Link>
          </div>
        </section>

        {/* Split Feature Section */}
        <section className="grid md:grid-cols-2 gap-10 py-20 px-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-8 text-[#341f9b]">
            <h2 className="text-2xl font-bold mb-4">What is DOOH Advertising?</h2>
            <p>
              Digital Out-of-Home uses digital screens in public spaces to deliver visual messages. It includes malls, airports, transit points, and roadside LED billboards.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 text-[#341f9b]">
            <h2 className="text-2xl font-bold mb-4">What is Programmatic DOOH?</h2>
            <p>
              Programmatic DOOH automates ad placements using data, time, location, and audience behavior—making campaigns smarter, targeted, and measurable.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-100 py-20 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#341f9b] mb-10">
            How Programmatic DOOH Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-[#00acd7]">
            {["Select Screens", "Target Audience", "Upload Creatives", "Track Results"].map(
              (step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 text-[#341f9b]"
                >
                  <h3 className="text-xl font-bold mb-2">{step}</h3>
                  <p className="text-sm text-gray-600">
                    Step {idx + 1} of your campaign journey explained.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Programmatic + DOOH?</h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Nationwide Reach with Smart Targeting</li>
                <li>Real-Time Bidding & Dynamic Scheduling</li>
                <li>Cost Efficiency & Data-Driven Decisions</li>
                <li>Flexible Creative Rotation</li>
              </ul>
            </div>
            <div>
              <Image
                src="/images/programmatic-benefits.webp"
                alt="DOOH Benefits"
                width={500}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Real-Time Use Cases */}
        <section className="py-20 px-6 bg-white text-[#341f9b] text-center">
          <h2 className="text-3xl font-bold mb-6">
            Real-Time Programmatic DOOH Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Weather-Based Ads",
                desc: "Auto-trigger sunscreen ads when UV index is high or raincoat ads when it rains."
              },
              {
                title: "Footfall Triggered Ads",
                desc: "Show your ad when crowds gather near malls, stations or stadiums."
              },
              {
                title: "Geo-Fenced Campaigns",
                desc: "Deliver hyper-local promotions based on customer proximity to your outlets."
              }
            ].map((useCase, i) => (
              <div key={i} className="p-6 shadow-md border rounded-lg">
                <h3 className="font-semibold text-xl mb-2">{useCase.title}</h3>
                <p>{useCase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Logos */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#341f9b] mb-6">Trusted by Brands</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["Cosmos.webp", "BOI.webp", "Bajaj.webp"].map((logo, i) => (
                <Image
                  key={i}
                  src={`/logos/${logo}`}
                  alt={`Brand Logo ${i + 1}`}
                  width={120}
                  height={60}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make Your Campaign Smarter?
            </h2>
            <p className="text-lg mb-6">
              Let us help you run impactful ads with the power of DOOH and Programmatic synergy.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#341f9b] font-semibold px-6 py-3 rounded-md hover:bg-blue-100 transition"
            >
              Book a Demo Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
