"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import ScrollToTopLink from "./scroll-to-top-link"

const repeaterItems = [
  {
    image: "/money-transfer.png",
    subHeading: "Reduce costs",
    heading: "Save up to 75%",
    description:
      "When you hire offshore staff in the Philippines with Signature Outsourcing Solutions, you can save up to 75% of the costs compared to hiring locally. Outsourcing to the Philippines is an extremely cost-efficient strategy to grow and expand your business.",
    link: "/how-it-works/",
  },
  {
    image: "/web-development.png",
    subHeading: "Scale quickly",
    heading: "Access to Superior talent",
    description:
      "With Signature Outsourcing Solutions, you can scale your organisation quickly, easily, and cost-effectively. Our AI-enhanced recruitment process and dedicated support team help you build a custom-fit offshore team, made up of the top 1% of talent in the Philippines.",
    link: "/how-it-works/recruitment-services/",
  },
  {
    image: "/remote-learning.png",
    subHeading: "Increased efficiency",
    heading: "Dedicated Offshore Staff",
    description:
      "Your offshore staff operate during the working hours you define and are effectively an extension of your local team, just located remotely. You select the candidates you want on your team and they report to you daily, just like hiring locally.",
    link: "/how-it-works/",
  },
]

export default function RepeaterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {repeaterItems.map((item, index) => (
          <RepeaterItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

function RepeaterItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-8 mb-16 last:mb-0`}
    >
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
        transition={{ duration: 0.6 }}
      >
        <Image src={item.image || "/placeholder.svg"} alt={item.heading} width={500} height={500} className="mx-auto" />
      </motion.div>
      <div className="md:w-1/2">
        <motion.p
          className="text-gray-500 uppercase tracking-wider mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {item.subHeading}
        </motion.p>
        <motion.h3
          className="text-3xl font-bold text-[#0a2642] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {item.heading.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-[#00c2ff]">{item.heading.split(" ").slice(-1)}</span>
        </motion.h3>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {item.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ScrollToTopLink
            href={item.link}
            className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#00c2ff] text-white hover:bg-[#0a2642] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </ScrollToTopLink>
        </motion.div>
      </div>
    </div>
  )
}
