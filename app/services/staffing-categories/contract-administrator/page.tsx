import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContractAdministratorPage() {
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
            <span className="text-gray-700">Contract Administration</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">Contract Administration</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">Contract Management Specialists from the Philippines</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/free-photo/closeup-hands-passing-contract-unrecognizable-businessman_1098-19612.jpg?ga=GA1.1.1085061816.1743815774&semt=ais_hybrid&w=740"
              alt="Contract handover between business professionals"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Need someone to manage the details between contractors, clients, legal teams and accounting? Hire a
              Contract Administrator from the Philippines and let us be that bridge. This profession is harder to find
              in the Philippines, but unlike unicorns, they do exist. Contract Administrators can help you: monitor
              compliance with contracts, handle disputes, coordinate with Project Managers, manage documentation and
              oversee payments.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Contract Administrators based in the Philippines often have experience working on projects worldwide. Many
              have spent significant portions of their career working in countries like Malaysia, Singapore and Saudi
              Arabia. They may also have experience working remotely for countries like the USA, Australia or New
              Zealand.
            </p>

            <p className="text-gray-700 mb-6 text-justify font-bold text-xl">
              Do you want to save up to 75% off your current costs? Are interested hiring a Contract Administrator from
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
