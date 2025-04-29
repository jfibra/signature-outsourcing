"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"

const benefits = [
  {
    title: "Save up to 75% compared to hiring locally",
    url: "/save",
  },
  {
    title: "Retain your staff at a Great Place To Work",
    url: "/retain",
  },
  {
    title: "Data security meeting ISO standards",
    url: "/security",
  },
  {
    title: "Hire the top 1% of talent in the Philippines",
    url: "/hire",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="bg-[#0d3d62] py-16 relative" ref={ref}>
      {/* Removed the diagonal divider at the top */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#00c2ff] rounded-lg p-6 text-[#0a2642] flex flex-col h-full shadow-lg"
            >
              <h3 className="text-xl font-bold mb-16">{benefit.title}</h3>
              <div className="mt-auto pt-4">
                <Link
                  href={benefit.url}
                  className="bg-[#0a2642] text-white p-2 rounded-full inline-flex items-center justify-center w-10 h-10 hover:bg-[#0d3a6b] transition-colors duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
