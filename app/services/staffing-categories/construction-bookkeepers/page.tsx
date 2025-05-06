import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ConstructionBookkeepersPage() {
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
            <span className="text-gray-700">Construction Bookkeepers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">Construction Bookkeepers</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">Financial Management for Construction from the Philippines</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/free-photo/working-housing-project_1098-17511.jpg?ga=GA1.1.1085061816.1743815774&semt=ais_hybrid&w=740"
              alt="Construction Bookkeeper working on housing project"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              When looking to outsource in the Philippines, don't forget about bookkeepers. Accounting standards are
              similar, worldwide. We have plenty of talented bookkeepers to provide you with.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Most bookkeepers in the Philippines are proficient in Xero and QuickBooks. As in your country, they may
              initially be unfamiliar with your construction management system or customized ERP. However, whether it's
              Foundation, Spectrum, Cheops, or another platform, they can adapt and learn quickly.
            </p>

            <p className="text-gray-700 mb-6 text-justify font-bold text-xl">
              Do you want to save up to 75% off your current costs? Are interested hiring Construction Bookkeepers from
              the Philippines? Please fill out the form below.
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
