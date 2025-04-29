import Image from "next/image"
import { Facebook, Linkedin } from "lucide-react"
import ScrollToTopLink from "./scroll-to-top-link"

export default function Footer() {
  // Define all staffing roles in one array for consistency
  const staffingRoles = [
    { title: "Project Engineers", url: "/services/staffing-categories/project-coordinator/" },
    { title: "Quantity Surveyors", url: "/services/staffing-categories/qs-estimator/" },
    { title: "CAD Drafters & Designers", url: "/services/staffing-categories/cad-drafting/" },
    { title: "Contract Administration", url: "/services/staffing-categories/contract-administrator/" },
    { title: "Structural Design", url: "/services/staffing-categories/structural-design/" },
    { title: "Construction Bookkeepers", url: "/services/staffing-categories/construction-bookkeepers/" },
  ]

  // First column roles for desktop view
  const firstColumnRoles = staffingRoles.slice(0, 4)
  // Second column roles for desktop view
  const secondColumnRoles = staffingRoles.slice(4)

  return (
    <footer className="bg-[#0d3d62] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Email Us */}
          <div>
            <div className="mb-6">
              <Image
                src="/Footer-SO-Logo.png"
                alt="Signature Outsourcing"
                width={200}
                height={200}
                className="w-auto h-40"
              />
            </div>
            <h3 className="text-xl font-bold mb-6">Email Us</h3>
            <ScrollToTopLink href="mailto:info@signatureoutsourcing.com" className="text-[#00c2ff] hover:underline">
              info@signatureoutsourcing.com
            </ScrollToTopLink>
            <h3 className="text-xl font-bold mb-6 mt-6">Head Office</h3>
            <p className="mb-2 text-white">A Division of Evotech, Inc.</p>
            <address className="not-italic mb-6 text-white">
              9th Floor Park Centrale Tower,
              <br /> Jose Ma. Del Mar Street, <br /> B2 L3 Cebu I.T. Park, Apas 6000, <br />
              Cebu City (Capital), Cebu Philippines
            </address>

            <div className="flex space-x-4">
              <ScrollToTopLink
                href="https://www.facebook.com"
                target="_blank"
                className="text-white hover:text-[#00c2ff] transition-colors duration-300"
                ariaLabel="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </ScrollToTopLink>
              <ScrollToTopLink
                href="https://www.linkedin.com"
                target="_blank"
                className="text-white hover:text-[#00c2ff] transition-colors duration-300"
                ariaLabel="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </ScrollToTopLink>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { title: "About Us", url: "/about-us/" },
                { title: "How it works", url: "/how-it-works/" },
              ].map((link, index) => (
                <li key={index}>
                  <ScrollToTopLink
                    href={link.url}
                    className="text-white hover:text-[#00c2ff] transition-colors duration-300"
                  >
                    {link.title}
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Staffing Roles - First Column (visible on all screens) */}
          <div>
            {/* Title visible on all screens */}
            <h3 className="text-xl font-bold mb-6">Staffing roles</h3>

            {/* Mobile view: All roles in one column */}
            <ul className="space-y-4 md:hidden">
              {staffingRoles.map((link, index) => (
                <li key={index}>
                  <ScrollToTopLink
                    href={link.url}
                    className="text-white hover:text-[#00c2ff] transition-colors duration-300"
                  >
                    {link.title}
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>

            {/* Desktop view: First column roles */}
            <ul className="hidden md:block space-y-4">
              {firstColumnRoles.map((link, index) => (
                <li key={index}>
                  <ScrollToTopLink
                    href={link.url}
                    className="text-white hover:text-[#00c2ff] transition-colors duration-300"
                  >
                    {link.title}
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Staffing Roles - Second Column (hidden on mobile) */}
          <div className="hidden md:block mt-0 md:mt-[52px]">
            <ul className="space-y-4">
              {secondColumnRoles.map((link, index) => (
                <li key={index}>
                  <ScrollToTopLink
                    href={link.url}
                    className="text-white hover:text-[#00c2ff] transition-colors duration-300"
                  >
                    {link.title}
                  </ScrollToTopLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-12"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>
            © 2025 Signature Outsourcing. All rights reserved.{" "}
            <ScrollToTopLink href="/privacy-policy/" className="hover:text-[#00c2ff] transition-colors duration-300">
              Privacy Policy
            </ScrollToTopLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
