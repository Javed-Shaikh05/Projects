"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Move the data outside the component (fine to do)
const caseStudiesData = [
  {
    title: "Kotak 811 × Coffee Cafés",
    slug: "kotak-811",
    image: "/images/casestudy-kotak811.jpg",
    summary: "Reward-led DOOH campaign in Pune cafés boosting app downloads.",
    result: "📈 37% boost in app downloads",
    category: "Finance"
  },
  {
    title: "Domino’s × Apartment Screens",
    slug: "dominos",
    image: "/images/casestudy-dominos.jpg",
    summary: "Weekend targeting in Hyderabad apartments driving food orders.",
    result: "📈 22% increase in local orders",
    category: "Food & Beverage"
  },
  {
    title: "Clinic Plus × Retail Storefronts",
    slug: "clinic-plus",
    image: "/images/casestudy-clinicplus.jpg",
    summary: "Localized messaging outside retail outlets increased brand trust.",
    result: "📈 18% brand recall uplift",
    category: "Retail"
  }
];

export default function CaseStudiesPage() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("impact");

  const filteredStudies = caseStudiesData
    .filter((c) => category === "All" || c.category === category)
    .sort((a, b) => {
      if (sortBy === "impact") return b.result.localeCompare(a.result); // fallback sorting logic
      if (sortBy === "alpha") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900">
        {/* Hero Banner */}
        <section className="py-24 text-center bg-gradient-to-r from-[#00acd7] to-[#341f9b] text-white">
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">Explore Our Case Studies</h1>
            <p className="text-lg">
              Real brands, real success — see how our hyper-local strategies drove results.
            </p>
          </div>
        </section>

        {/* Filter + Sort */}
        <section className="max-w-6xl mx-auto px-6 pt-12">
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="All">All Categories</option>
              <option value="Retail">Retail</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Finance">Finance</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-4 py-2 rounded"
            >
              <option value="impact">Sort by Impact</option>
              <option value="alpha">Sort A–Z</option>
            </select>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="pb-16 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Link href={`/case-studies/${study.slug}`} className="block h-full">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-gray-700 mb-2">{study.summary}</p>
                    <p className="text-sm text-gray-500">{study.result}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
