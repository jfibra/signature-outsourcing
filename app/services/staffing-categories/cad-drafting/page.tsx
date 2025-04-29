import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function CADDraftersPage() {
  return (
    <main className="overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#00c2ff]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/services/staffing-categories/" className="hover:text-[#00c2ff]">
              Staffing Categories
            </Link>{" "}
            / <span className="text-gray-700">CAD Drafters & Designers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">CAD Drafters & Designers</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">AutoCAD Specialists from the Philippines</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/free-photo/3d-graphic-artists-sketching-mechanical-asset-using-advanced-software-technology-modeling-expert-optimising-polygon-count-geometry-mesh-order-improve-visual-quality_482257-42941.jpg?ga=GA1.1.1085061816.1743815774&semt=ais_hybrid&w=740"
              alt="CAD Designer working on 3D model"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Looking for someone that knows their way around Civil 2D or Civil 3D? We can provide them! Whether it is:
              Design and Drafting, Collaboration, Revisions and Corrections, Compliance, or Documentation.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Auto CAD is the worldwide standard, and things are no different here in the Philippines. There are plenty
              of very skilled Autodesk users here. Even if it is just "as built" or "cut and fill" updates, it can be
              accomplished cheaper here.
            </p>

            <p className="text-gray-700 mb-6 text-justify font-bold text-xl">
              Do you want to save up to 75% off your current costs? Are interested hiring CAD Operators, Designers and
              Draftsman from the Philippines? Please fill out the form below.
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
