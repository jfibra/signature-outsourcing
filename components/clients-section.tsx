"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ClientsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 bg-[#00c2ff]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Media Quotes and Client Testimonials removed as requested */}

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#0a2642] text-center mb-8"
        >
          Trusted by businesses worldwide
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[#0a2642] text-lg mb-8">
            Signature Outsourcing Solutions has helped hundreds of businesses across various industries to scale
            efficiently and reduce costs through our premium offshore staffing solutions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-24">
                <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
