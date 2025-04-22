/* ======================================
   /pages/blog/index.js
   - Full blog listing page + Header/Footer
====================================== */
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { postsData } from "@/lib/posts"
import { motion } from "framer-motion"

export default function BlogIndex() {
  return (
    <>
      {/* Existing Header */}
      <Header />

      {/* Hero / Title Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-50 to-white py-16 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
            Featured Blogs & Insights
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Explore our in-depth articles, case studies, and industry insights – 
            each crafted to keep you ahead in the ever-evolving DOOH landscape.
          </p>
        </div>
      </motion.section>

      {/* Main Blog Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">

          {/* Grid of all posts */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {postsData.map((post) => (
              <motion.div
                key={post.slug}
                className="bg-white shadow-lg border border-gray-200 p-4 rounded-md"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Cover Image */}
                <div className="relative h-52 mb-4">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Date & Info */}
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>
                    {post.published_date.day} {post.published_date.month}
                  </span>
                  <span className="mx-3">•</span>
                  <span>By {post.author}</span>
                  <span className="mx-3">•</span>
                  <span>{post.category}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 mb-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Existing Footer */}
      <Footer />
    </>
  )
}
