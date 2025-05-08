"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import ScrollToTopLink from "./scroll-to-top-link"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="bg-[#0a2642] text-white relative overflow-hidden pt-12 md:pt-0" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2642] to-[#0d3a6b] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Build Remote & Offshore Teams in the <span className="text-white">Philippines with</span>
            <div className="text-[#00c2ff] mt-2">Signature Outsourcing</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 mb-8 max-w-xl text-justify"
          >
            Signature Outsourcing provides the best remote staff offshoring and offshore staff outsourcing services. We
            help you hire and retain the top 1% of talent in the Philippines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ScrollToTopLink
              href="/about-us"
              focusId="contact-form"
              className="group bg-[#00c2ff] text-[#0a2642] font-medium rounded-full px-6 py-3 inline-flex items-center hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start building your team
              <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </ScrollToTopLink>
          </motion.div>
        </div>

        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 z-10"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-[#00c2ff] opacity-10 rounded-full blur-xl"></div>
            <div className="flex justify-center">
              <img
                alt="Remote team collaboration"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                className="relative z-10"
                src="/hero-section-transparent.png"
                style={{ color: "transparent", width: "70%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
