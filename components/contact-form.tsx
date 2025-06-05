"use client"

import { useState } from "react"
import Swal from "sweetalert2"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    staffCount: "",
    message: "",
    marketing: false,
    outsourcingInterest: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Check if response is ok first
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Check if response is JSON
      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text()
        console.error("Non-JSON response:", text)
        throw new Error("Server returned non-JSON response")
      }

      const result = await response.json()

      if (result.success) {
        // Show success message with SweetAlert
        Swal.fire({
          title: "Thank you!",
          text: "We've received your information and will contact you within a few days.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#00c2ff",
        })

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          location: "",
          company: "",
          staffCount: "",
          message: "",
          marketing: false,
          outsourcingInterest: false,
        })
      } else {
        throw new Error(result.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Form submission error:", error)

      Swal.fire({
        title: "Oops!",
        text: "There was an error sending your message. Please try again or contact us directly at info@signatureoutsourcing.com",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#ff0099",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#00c2ff] rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-[#0a2642] mb-4">
        Talk to us about building your Signature Outsourcing team
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number including area code*"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        />
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        >
          <option value="">Your location / time zone *</option>
          <option value="Australia / New Zealand">Australia</option>
          <option value="Canada">Canada</option>
          <option value="New Zealand">New Zealand</option>
          <option value="UK / Europe">UK / Europe</option>
          <option value="USA / Canada (EST)">USA (EST)</option>
          <option value="USA / Canada (PST)">USA (PST)</option>
          <option value="USA / Canada (MST)">USA (MST)</option>
          <option value="USA / Canada (CST)">USA (CST)</option>
          <option value="Middle East">Middle East</option>
          <option value="Asia">Philippines</option>
          <option value="Singapore">Singapore</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="company"
          placeholder="Company name*"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        />
        <select
          name="staffCount"
          value={formData.staffCount}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
          disabled={isSubmitting}
        >
          <option value="">How many staff are you looking for? *</option>
          <option value="1">1 Full-Time</option>
          <option value="1 - 5">2 - 5 Full-Time</option>
          <option value="5 - 10">6 - 10 Full-Time</option>
          <option value="10 - 30">11 - 30 Full-Time</option>
          <option value="30+">30+ Full-Time</option>
          <option value="I'm not looking to hire staff">I'm not looking to hire staff</option>
          <option value="I'm looking for work">I'm looking for work</option>
          <option value="I'm looking for Part-Time staff">I'm looking for Part-Time staff</option>
        </select>
        <textarea
          name="message"
          placeholder="Describe your requirements in terms of job titles"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642] min-h-[100px]"
          disabled={isSubmitting}
        ></textarea>

        <div className="space-y-3">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="outsourcingInterest"
              name="outsourcingInterest"
              checked={formData.outsourcingInterest}
              onChange={handleCheckboxChange}
              className="mt-1 mr-2"
              disabled={isSubmitting}
            />
            <label htmlFor="outsourcingInterest" className="text-sm text-[#0a2642]">
              I want to be contacted about outsourcing staff in from Signature Outsourcing.
            </label>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="marketing"
              name="marketing"
              checked={formData.marketing}
              onChange={handleCheckboxChange}
              className="mt-1 mr-2"
              disabled={isSubmitting}
            />
            <label htmlFor="marketing" className="text-sm text-[#0a2642]">
              Yes, I would like to receive marketing communications from Signature Outsourcing.
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0a2642] text-white font-medium rounded-full py-3 hover:bg-[#0a3a6a] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Contact Us"
          )}
        </button>
      </form>
    </div>
  )
}
