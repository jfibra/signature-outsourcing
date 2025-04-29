import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function StructuralDesignPage() {
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
            / <span className="text-gray-700">Structural Design</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">Structural Design</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">Structural Engineering Specialists from the Philippines</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/premium-photo/business-people-discussing-blueprint-desktop-computer_1048944-14143490.jpg?ga=GA1.1.1085061816.1743815774&semt=ais_hybrid&w=740"
              alt="Structural engineers discussing blueprint on desktop computer"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Whether it's design or analysis, it can be done more cost-effectively in the Philippines. Our structural
              engineers can help you design, select appropriate materials, run simulations, and collaborate with
              architects and contractors.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Most engineers are proficient in essential programs like AutoCAD for drafting and Revit for Building
              Information Modeling (BIM). Many use SAP2000 and ETABS for structural analysis, STAAD.Pro for designing
              various structures, Tekla Structures for modeling steel and concrete elements, and Civil 3D for civil
              engineering projects.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              If they are producing designs, though, keep in mind that they are licensed in the Philippines. You will
              need to have their designs assessed and certified in your country. Even with the additional review
              process, most of our customers still find the incredible savings well worth it.
            </p>

            <p className="text-gray-700 mb-6 font-bold text-xl text-justify">
              Do you want to save up to 75% off your current costs? Are interested hiring Structural Engineers from the
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
