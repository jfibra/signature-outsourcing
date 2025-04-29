import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import HowItWorksSection from "@/components/how-it-works"

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#00c2ff]">
              Home
            </Link>{" "}
            / <span className="text-gray-700">How It Works</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">How It Works</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">Our Simple Process for Building Your Offshore Team</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/free-photo/business-people-shaking-hands-finishing-up-meeting_53876-25056.jpg"
              alt="Business professionals in a meeting"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Signature Outsourcing hires you a dedicated, full time employee. They can be based at home, the office, or
              in a hybrid set up based in the Philippines. Since we specialize in Civil Engineers, we are connected to
              the community, personally know professors at the top schools, and have the ability to seek out and vet top
              talent.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              It is a simple process to hire your dedicated, offshore outsourced, engineering professionals.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Additional Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none mb-12">
            <h3 className="text-2xl font-bold text-[#0a2642] mb-4">We manage the operations</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Recruitment</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">HR</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Payroll</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Benefits</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Compliance</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Retention</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Legal</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">ISO Quality</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Facilities</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Computers</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">IT Support</p>
              </div>
              <div className="bg-[#f0f9ff] p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                <p className="font-semibold text-[#0a2642] text-center">Fast Internet</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#0a2642] mb-4">You provide:</h3>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2 text-justify">
                Involvement in the interview process to help decide on best fit for you
              </li>
              <li className="mb-2 text-justify">Training new team member(s) to work within your system</li>
              <li className="mb-2 text-justify">Welcome them to your team and make them feel valued</li>
              <li className="mb-2 text-justify">Provide any software licenses you need them to utilize</li>
            </ul>

            <p className="text-gray-700 mb-6 font-bold text-xl text-justify">
              Do you want to save up to 75% off your current costs? Are interested hiring Project Engineers from the
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
