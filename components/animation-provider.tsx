"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimationProviderProps {
  children: ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}
