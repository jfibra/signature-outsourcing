"use client"

import { useRef } from "react"
import { Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import ScrollToTopLink from "./scroll-to-top-link"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="bg-[#0d3d62] text-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-[#00c2ff] mb-4">
              Want to know how outsourcing can help your business?
            </h2>
            <p className="text-gray-300 mb-6">
              Request a call back from our expert recruitment specialists to see how Signature Outsourcing Solutions can
              grow and manage your offshore staff.
            </p>
            <ScrollToTopLink
              href="/contact"
              className="inline-block bg-[#00c2ff] text-[#0a2642] font-medium rounded-full px-6 py-3 hover:bg-white transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact us today
            </ScrollToTopLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-[#00c2ff] rounded-lg p-6 shadow-xl mb-6">
              <h3 className="text-xl font-bold text-[#0a2642] mb-4">Contact Us</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First name*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
                  required
                />
                <input
                  type="text"
                  placeholder="Last name*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
                  required
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
                  required
                />
                <div className="flex items-start">
                  <input type="checkbox" id="marketing" className="mt-1 mr-2" />
                  <label htmlFor="marketing" className="text-sm text-[#0a2642]">
                    Yes, I would like to receive marketing communications from Signature Outsourcing Solutions.
                  </label>
                </div>
                <p className="text-xs text-[#0a2642]">
                  By clicking "Get in touch" you are agreeing to the Signature Outsourcing Solutions data{" "}
                  <ScrollToTopLink href="/privacy-policy" className="underline">
                    Privacy Policy
                  </ScrollToTopLink>
                  .
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#0a2642] text-white font-medium rounded-full py-3 hover:bg-[#0a3a6a] transition duration-300"
                >
                  Get in touch
                </button>
              </form>
            </div>

            <div className="bg-[#e6f9ff] rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-6 w-6 text-[#0a2642]" />
                <h3 className="text-xl font-bold text-[#0a2642]">Call Us</h3>
              </div>
              <div className="text-[#0a2642] space-y-2">
                <p>International +61 2 8073 4162</p>
                <p>Australia (02) 8073 4162</p>
                <p>USA (415) 347 8581</p>
                <p>UK (208) 077 0964</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
