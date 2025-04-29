import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#00c2ff]">
              Home
            </Link>{" "}
            / <span className="text-gray-700">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">About Us</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">Your Trusted Outsourcing Partner</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg"
              alt="Business professionals shaking hands"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Welcome to Signature Outsourcing, a trusted division of Evo Tech Software Solutions Inc., proudly serving
              businesses since 2015. With multiple offices across the country, we have access to top-tier talent,
              ensuring our clients receive exceptional service and expertise.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              As an independent division, we specialize in providing tailored outsourcing solutions for construction
              companies and developers, understanding their unique demands and industry challenges. Yet, we operate with
              the resources and strength of a much larger organization, giving our clients the perfect blend of
              personalized service and corporate-scale capabilities.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              At Signature Outsourcing, we believe in efficiency, reliability, and innovation, helping businesses build
              a stronger foundation for success. Let's construct something great together.
            </p>

            <p className="text-gray-700 mb-6 font-bold text-xl text-justify">
              Do you want to save up to 75% off your current costs? Are interested hiring from the Philippines? Please
              fill out the form below.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
