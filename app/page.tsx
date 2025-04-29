import HeroSection from "@/components/hero-section"
import RepeaterSection from "@/components/repeater-section"
import HowItWorksSection from "@/components/how-it-works"
import BuildSection from "@/components/build-section"
import BenefitsSection from "@/components/benefits-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Repeater Section */}
      <RepeaterSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Build Section */}
      <BuildSection />
    </main>
  )
}
