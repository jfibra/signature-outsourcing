"use client"

import { useState } from "react"

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)

    // Here you would typically send the form data to your backend
    // For example, using fetch or axios to send to an API endpoint
    // that would then email the request to info@signatureoutsourcing.com

    // Example of what this might look like:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    alert("Form submitted! We'll be in touch soon.")
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
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number including area code*"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
        />
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
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
        />
        <select
          name="staffCount"
          value={formData.staffCount}
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0a2642]"
          required
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
            />
            <label htmlFor="marketing" className="text-sm text-[#0a2642]">
              Yes, I would like to receive marketing communications from Signature Outsourcing.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0a2642] text-white font-medium rounded-full py-3 hover:bg-[#0a3a6a] transition duration-300"
        >
          Contact Us
        </button>
      </form>
    </div>
  )
}
