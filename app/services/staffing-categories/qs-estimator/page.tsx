import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function QuantitySurveyorsPage() {
  return (
    <main className="overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#00c2ff]">
              Home
            </Link>{" "}
            / <span className="text-gray-700">Staffing Categories</span> /{" "}
            <span className="text-gray-700">Quantity Surveyors</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">Quantity Surveyors</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">QS Engineers from the Philippines</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/premium-photo/top-view-team-inspect-house-model-while-manager-hold-blueprint-alimentation_31965-376686.jpg?ga=GA1.1.1085061816.1743815774&semt=ais_hybrid&w=740"
              alt="Quantity Surveyor team inspecting house model with blueprints"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Quantity Surveyors or QS Engineers are one of the most outsourced Civil Engineering specialties from the
              Philippines. They can function remotely in most phases including: Feasibility, Design, Tender, Post Tender
              and Construction.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              The software they will commonly have expertise in are: MS Excel, AutoCAD 2D, Bluebeam Revue, Expert
              Estimation by Pronamics and Cordell Estimator by CoreLogic
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Experienced Quantity Survey Engineers will often have years of experience working remotely for companies
              in: The United States, Australia, New Zealand, Singapore, and/or the Middle East. They will also possess
              localized hands-on experience.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              At Signature Outsourcing Solutions, we have a client that had 3 of their 4 QS Engineers leave in a sudden
              manner. As a result, in 2022 they outsourced their entire department to Cebu. Their remaining QS Engineer
              became their supervisor and managed the team from Sydney. They originally hired 4 Quantity Surveyors that
              were doing Tender and Post Tender work. This included RFQs, BOQs and Tenders submitted to the supervisor
              for final review. They also eventually maintained their own database of material prices to be more
              efficient. The program proved successful, and the company eventually hired more, doubling the number of
              Tenders they were submitting. At one point, they had to slow down, because they had won 12 projects and
              only had the capacity to handle 5-8 at any one time.
            </p>

            <p className="text-gray-700 mb-6 font-bold text-xl text-justify">
              Do you want to save up to 75% off your current costs? Are interested hiring QS Engineers from the
              Philippines? Please fill out the form below.
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
