import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ProjectEngineersPage() {
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
            <span className="text-gray-700">Project Engineers</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#0a2642] mb-2">Project Engineers</h1>
          <h2 className="text-xl text-[#00c2ff] mb-6">Civil Engineering Project Management from the Philippines</h2>

          <div className="mb-8">
            <Image
              src="https://img.freepik.com/premium-photo/group-people-working-table_1048944-916865.jpg?ga=GA1.1.1085061816.1743815774&semt=ais_hybrid&w=740"
              alt="Project Engineers collaborating on a project"
              width={800}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="prose max-w-none mb-12">
            <p className="text-gray-700 mb-6 text-justify">
              Many tasks that Project Managers, Project Engineers and/or Site Engineers do, can be outsourced to The
              Philippines. All the tasks that your Civil Engineers perform in the office can be done by professionals at
              Signature Outsourcing Solutions. This includes: Project Planning, Cost Estimation, Scheduling &
              Coordination, Resource Allocation, and Documentation & Reporting.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              By freeing up your local Site Engineers and Project Managers from mundane office tasks, it provides them
              with more available time. This enables them to manage multiple sites or maintain more focus and higher
              standards on an important project. Things archiving site diaries, timely NODs or forwarding site hours to
              payroll often get overlooked or done at the last minute. Coordinating material deliveries and sorting
              through RFQs often take time and focus that is hard to come by when on site. Having a Filipino engineer
              handling these tasks will help your company become more efficient. Thanks to the extra support they are
              receiving, it will also help you retain your local engineers.
            </p>

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
