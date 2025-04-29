"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeading({ title, subtitle, center = false, light = false }: SectionHeadingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const titleWords = title.split(" ")
  const lastWord = titleWords.pop()
  const firstWords = titleWords.join(" ")

  return (
    <div ref={ref} className={`mb-12 ${center ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-[#0a2642]"}`}
      >
        {firstWords} <span className={light ? "text-[#00c2ff]" : "text-[#00c2ff]"}>{lastWord}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-3xl ${center ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-gray-600"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
