"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionHeading from "./section-heading"

export default function VideoSection() {
  const [showVideo, setShowVideo] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Philippines: The proven outsourcing destination of choice"
          subtitle="The Philippines was named three times as the Offshoring Destination of the Year by the UK body of National Outsourcing Association"
          center
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
        >
          {!showVideo ? (
            <div
              className="relative aspect-video bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: "url('/philippine-office-team.png')",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <motion.button
                  onClick={() => setShowVideo(true)}
                  className="w-20 h-20 bg-[#00c2ff] rounded-full flex items-center justify-center hover:bg-[#0a2642] transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="h-8 w-8 text-white ml-1" />
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://player.vimeo.com/video/829277791?h=9550b2aabc&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
                title="Outsourced Philippines - Premium Offshore Staffing Company"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              ></iframe>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
