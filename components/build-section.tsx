"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import ScrollToTopLink from "./scroll-to-top-link"

export default function BuildSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="py-16 bg-[#0a2642] relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center shadow-2xl"
        >
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2642] mb-6 leading-tight">
              Build your managed,
              <br />
              full-time <span className="text-[#ff0099]">Signature Outsourcing</span>
              <br />
              team in the Philippines
            </h2>
            <div>
              <ScrollToTopLink
                href="/request-quote/"
                className="inline-block bg-[#ff0099] text-white font-medium rounded-full px-6 py-3 hover:bg-[#e02e5a] transition duration-300 shadow-md hover:shadow-lg"
              >
                Get a quote
              </ScrollToTopLink>
            </div>
          </div>
          <motion.div className="md:w-1/3" whileHover={{ rotate: 5, scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Image src="/team-collaboration.png" alt="Team Building" width={300} height={300} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
