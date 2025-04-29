import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function CivilEngineeringPage() {
  return (
    <main className="overflow-hidden">
      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-[#00c2ff]">
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold text-[#0a2642] mb-2">Offshore Civil Engineers</h1>
              <h2 className="text-xl text-[#00c2ff] mb-6">Civil Engineering Outsourcing Philippines</h2>

              <div className="mb-8">
                <Image
                  src="https://outsourced.ph/wp-content/uploads/2019/08/civil-engineer.jpg"
                  alt="Civil Engineer working on blueprints"
                  width={800}
                  height={533}
                  className="rounded-lg shadow-md w-full"
                />
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6 text-justify">
                  Whether you have just started planning, need designs for a project you have already started working on
                  or you're ready to start building all aspects of your construction should be overseen by a
                  professional civil engineer. Civil engineering is an important aspect of your project but can
                  sometimes come with quite a large price tag.
                </p>

                <p className="text-gray-700 mb-6 text-justify">
                  <strong>Civil engineering outsourcing</strong> could be the scalable, cost effective solution you need
                  to get your project completed. Whether you need a work-from-home{" "}
                  <strong>remote civil engineer</strong> or an office-based team of civil engineers look no further than
                  Outsourced.
                </p>

                <p className="text-gray-700 mb-6 text-justify">
                  Your offshore Civil engineering team at Outsourced can help with tasks such as:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Converting Mechanical and architectural drawings to CAD</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Creating blueprints and drafted drawings</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>HVAC Design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Solve technical problems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Project research and development</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Geospatial solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Anything that can be done remotely</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-justify">
                  The different levels of expertise and wide variety of industry areas our team has knowledge in means
                  Civil engineering outsourcing through the team at Outsourced is the perfect solution for you.
                </p>

                <p className="text-gray-700 mb-6 text-justify">
                  We have vast experience hiring offshore civil engineers such as:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Civil Engineering Technician</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Structural Engineer</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Project Engineer</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Site Engineer</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Civil Engineering Technologist</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#00c2ff] mr-2 mt-0.5" />
                        <span>Civil Engineer / Estimator</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#0a2642] mt-12 mb-6">
                  Benefits of hiring a Civil Engineer in the Philippines
                </h3>

                <p className="text-gray-700 mb-6 text-justify">
                  Hiring offshore civil engineers in the Philippines offers significant benefits for international
                  companies, particularly in terms of cost management and efficiency. Filipino engineers are known for
                  their ability to deliver cost-effective solutions without compromising quality, thanks to their
                  proficiency in resource optimization. This aspect is crucial for businesses aiming to manage budgets
                  effectively while maintaining high standards.
                </p>

                <p className="text-gray-700 mb-6 text-justify">
                  In project management and execution, Filipino civil engineers excel in handling complex projects and
                  coordinating with multiple stakeholders, ensuring smooth project execution and improved delivery
                  timelines. Their familiarity with international engineering standards ensures that projects adhere to
                  high-quality standards and compliance with relevant regulations, an essential factor for companies
                  operating globally.
                </p>

                <p className="text-gray-700 mb-6 text-justify">
                  By hiring a dedicated offshore Civil engineer with Outsourced you will eliminate a number of the
                  overheads that can sometimes drive up the price of hiring a traditional civil engineer locally. This
                  makes engineering outsourcing a cost effective solution.
                </p>

                <p className="text-gray-700 mb-6 text-justify">
                  If you would like to hire an offshore civil engineer or project engineer in the Philippines simply
                  <strong>
                    {" "}
                    <Link href="/contact-us/" className="text-[#00c2ff] hover:underline">
                      Contact us
                    </Link>
                  </strong>{" "}
                  today to find out more.
                </p>
              </div>
            </div>

            <div className="lg:w-1/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
