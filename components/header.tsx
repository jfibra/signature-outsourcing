"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ScrollToTopLink from "./scroll-to-top-link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isPositionsOpen, setIsPositionsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Job positions data
  const positions = [
    { title: "Project Engineers", url: "/services/staffing-categories/project-coordinator/" },
    { title: "Quantity Surveyors", url: "/services/staffing-categories/qs-estimator/" },
    { title: "CAD Drafters & Designers", url: "/services/staffing-categories/cad-drafting/" },
    { title: "Contract Administration", url: "/services/staffing-categories/contract-administrator/" },
    { title: "Structural Design", url: "/services/staffing-categories/structural-design/" },
    { title: "Construction Bookkeepers", url: "/services/staffing-categories/construction-bookkeepers/" },
  ]

  return (
    <header
      className={`${
        scrolled ? "bg-[#0a1f35] shadow-lg py-2" : "bg-[#0a1f35] py-4"
      } text-white sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <ScrollToTopLink href="/" className="flex items-center">
              <Image
                src="/Header-SO-Logo.png"
                alt="Signature Outsourcing"
                width={300}
                height={80}
                className="h-16 w-auto"
                priority
              />
            </ScrollToTopLink>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            <NavItem title="Why Signature" links={[{ title: "About Us", url: "/about-us" }]} />

            <NavItem title="How it works" links={[{ title: "Our Process", url: "/how-it-works" }]} />

            {/* Positions dropdown */}
            <div className="group relative">
              <button className="flex items-center space-x-1 text-white opacity-90 hover:opacity-100 hover:text-[#0095ff] py-2">
                <span>Positions</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full w-64 bg-white rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ul className="space-y-2 text-[#0a1f35] max-h-96 overflow-y-auto">
                  {positions.map((position, index) => (
                    <li key={index}>
                      <ScrollToTopLink href={position.url} className="block p-2 hover:bg-[#f0f9ff] rounded-md">
                        {position.title}
                      </ScrollToTopLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a1f35] mt-2 py-4 px-4 shadow-lg"
          >
            <nav className="flex flex-col space-y-4">
              <MobileNavItem title="Why Signature" url="/about-us" />
              <MobileNavItem title="How it works" url="/how-it-works" />

              {/* Mobile Positions Dropdown */}
              <div className="py-2 border-b border-gray-700">
                <button
                  className="flex items-center justify-between w-full text-white"
                  onClick={() => setIsPositionsOpen(!isPositionsOpen)}
                >
                  <span>Positions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isPositionsOpen ? "rotate-180" : ""}`} />
                </button>
                {isPositionsOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {positions.map((position, index) => (
                      <ScrollToTopLink
                        key={index}
                        href={position.url}
                        className="block py-1 text-gray-300 hover:text-white"
                      >
                        {position.title}
                      </ScrollToTopLink>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavItem({ title, links }) {
  return (
    <div className="group relative">
      <button className="flex items-center space-x-1 text-white opacity-90 hover:opacity-100 hover:text-[#0095ff] py-2">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full w-48 bg-white rounded-lg shadow-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <ul className="space-y-2 text-[#0a1f35]">
          {links.map((link, index) => (
            <li key={index}>
              <ScrollToTopLink href={link.url} className="block p-2 hover:bg-[#f0f9ff] rounded-md">
                {link.title}
              </ScrollToTopLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileNavItem({ title, url }) {
  return (
    <div className="py-2 border-b border-gray-700">
      <ScrollToTopLink href={url} className="flex items-center justify-between w-full text-white">
        <span>{title}</span>
      </ScrollToTopLink>
    </div>
  )
}
