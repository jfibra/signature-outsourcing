"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import ScrollToTopLink from "./scroll-to-top-link"

const steps = [
  {
    number: 1,
    icon: "/checklist-manager.png",
    title: "You provide us with a job description",
    description: "Just tell us what you need",
  },
  {
    number: 2,
    icon: "/business-meeting.png",
    title: "We recruit talented professionals",
    description: "Only the best. Quality assured",
  },
  {
    number: 3,
    icon: "/puzzle-innovation.png",
    title: "Your dedicated staff report to you daily",
    description: "Full time remote or office-based",
  },
  {
    number: 4,
    icon: "/security-protection.png",
    title: "We manage the operations",
    description: "And ensure quality standards",
  },
]

export default function HowItWorksSection() {
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
    <section className="py-16 bg-[#0a2642] text-white" ref={ref}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-xl text-white font-medium mb-2">How it works</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#00c2ff] mb-12">
            4 simple steps to your dedicated Signature Outsourcing staff
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="bg-[#0d2e4e] rounded-lg p-6 text-center relative shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-[#0e3359] group"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#00c2ff] text-[#0a2642] rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              <div className="mb-6 flex justify-center h-24">
                <Image
                  src={step.icon || "/placeholder.svg"}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ScrollToTopLink
            href="/how-it-works/"
            className="inline-block border border-[#00c2ff] text-[#00c2ff] font-medium rounded-full px-6 py-3 hover:bg-[#00c2ff] hover:text-[#0a2642] transition duration-300 shadow-md hover:shadow-lg"
          >
            Learn more about our process
          </ScrollToTopLink>
        </motion.div>
      </div>
    </section>
  )
}
