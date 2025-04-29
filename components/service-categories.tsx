"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "framer-motion"
import SectionHeading from "./section-heading"

const categories = [
  {
    icon: "/abstract-it-network.png",
    title: "Information technology (I.T)",
    links: [
      { title: "Data Annotator", url: "/services/staffing-categories/information-technology-i-t/data-annotator/" },
      { title: "Web Development", url: "/services/staffing-categories/information-technology-i-t/web-development/" },
      { title: "Data Scientist", url: "/services/staffing-categories/information-technology-i-t/hire-data-scientist/" },
      {
        title: "IoT Specialist",
        url: "/services/staffing-categories/information-technology-i-t/internet-of-things-iot-specialist/",
      },
    ],
    viewAllUrl: "/services/staffing-categories/information-technology-i-t/",
  },
  {
    icon: "/connected-customer-support.png",
    title: "Contact Center",
    links: [
      {
        title: "Member Services Specialist",
        url: "/services/staffing-categories/contact-center/member-services-specialist/",
      },
      { title: "Reservation Agent", url: "/services/staffing-categories/contact-center/reservation-agent/" },
      {
        title: "Customer Success Manager",
        url: "/services/staffing-categories/contact-center/customer-success-manager/",
      },
      { title: "Customer Service", url: "/services/staffing-categories/contact-center/customer-service/" },
    ],
    viewAllUrl: "/services/staffing-categories/contact-center/",
  },
  {
    icon: "/abstract-financial-growth.png",
    title: "Financial Services",
    links: [
      {
        title: "Payroll Specialist",
        url: "/services/staffing-categories/financial-services/payroll-specialist/",
      },
      {
        title: "Insurance Broker",
        url: "/services/staffing-categories/financial-services/insurance-broker/",
      },
      {
        title: "Accounting Manager",
        url: "/services/staffing-categories/financial-services/accounting/accounting-manager/",
      },
      {
        title: "Loan Processor",
        url: "/services/staffing-categories/financial-services/loan-processor/",
      },
    ],
    viewAllUrl: "/services/staffing-categories/financial-services/",
  },
  {
    icon: "/interconnected-gears-network.png",
    title: "Professional Services",
    links: [
      { title: "Project Manager", url: "/services/staffing-categories/professional-services/project-management/" },
      { title: "Recruiter", url: "/services/staffing-categories/professional-services/recruitment/" },
      { title: "HR Specialist", url: "/services/staffing-categories/professional-services/human-resources/" },
      { title: "Consultant", url: "/services/staffing-categories/professional-services/consulting/" },
    ],
    viewAllUrl: "/services/staffing-categories/professional-services/",
  },
  {
    icon: "/abstract-healthcare-symbol.png",
    title: "Healthcare",
    links: [
      {
        title: "Credentialing Nurse",
        url: "/services/staffing-categories/healthcare/credentialing-nurse/",
      },
      {
        title: "Medical Transcribers",
        url: "/services/staffing-categories/healthcare/hiring-outsourced-medical-transcribers-in-the-philippines/",
      },
      {
        title: "Medical Data Processors",
        url: "/services/staffing-categories/healthcare/hiring-remote-medical-data-processors-in-the-philippines/",
      },
      {
        title: "Chart Retrieval Specialists",
        url: "/services/staffing-categories/healthcare/hiring-offshore-chart-retrieval-specialists-in-the-philippines/",
      },
    ],
    viewAllUrl: "/services/staffing-categories/healthcare/",
  },
]

export default function ServiceCategories() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(100)
  const [visibleCards, setVisibleCards] = useState(1)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setCardWidth(100)
          setVisibleCards(1)
        } else if (window.innerWidth < 1024) {
          setCardWidth(50)
          setVisibleCards(2)
        } else {
          setCardWidth(33.33)
          setVisibleCards(3)
        }
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNext = () => {
    if (activeIndex < categories.length - visibleCards) {
      setActiveIndex(activeIndex + 1)
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }

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
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Outsourced Service Categories"
          subtitle="There are hundreds of roles we can recruit for you in the Philippines. Below is a list of some of the most popular roles our client's request within each industry."
          light
        />

        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="overflow-hidden"
          >
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * cardWidth}%)` }}
            >
              {categories.map((category, index) => (
                <motion.div key={index} variants={itemVariants} className="p-4" style={{ flex: `0 0 ${cardWidth}%` }}>
                  <div className="bg-[#e6f9ff] rounded-lg p-6 h-full text-[#0a2642] shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-6">
                      <Image
                        src={category.icon || "/placeholder.svg"}
                        alt={category.title}
                        width={50}
                        height={50}
                        className="mr-4"
                      />
                      <h3 className="text-xl font-bold">
                        <Link
                          href={category.viewAllUrl}
                          className="hover:text-[#00c2ff] transition-colors duration-300"
                        >
                          {category.title}
                        </Link>
                      </h3>
                    </div>
                    <ul className="mb-6 space-y-2">
                      {category.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.url}
                            className="text-gray-600 hover:text-[#00c2ff] hover:underline transition-colors duration-300"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={category.viewAllUrl}
                      className="text-[#00c2ff] font-medium hover:underline flex items-center group"
                    >
                      View all roles{" "}
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0a2642] text-white rounded-full p-2 ml-2 ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00a8e6]"
            } transition-colors duration-300 shadow-lg`}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            disabled={activeIndex === categories.length - visibleCards}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0a2642] text-white rounded-full p-2 mr-2 ${
              activeIndex === categories.length - visibleCards ? "opacity-50 cursor-not-allowed" : "hover:bg-[#00a8e6]"
            } transition-colors duration-300 shadow-lg`}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>

        <div className="w-full bg-gray-700 h-2 rounded-full mt-8">
          <div
            className="bg-[#00c2ff] h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{
              width: `${(visibleCards / categories.length) * 100}%`,
              marginLeft: `${(activeIndex / categories.length) * 100}%`,
            }}
          ></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/industries/"
            className="inline-block border border-white text-white font-medium rounded-full px-6 py-3 hover:bg-white hover:text-[#0a2642] transition duration-300 mb-8 shadow-md hover:shadow-lg"
          >
            View all industries
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
