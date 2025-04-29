import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AnimationProvider from "@/components/animation-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Signature Outsourcing",
  description: "Build Remote & Offshore Teams in the Philippines",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <AnimationProvider>{children}</AnimationProvider>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
