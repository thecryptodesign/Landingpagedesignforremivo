import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { FeatureShowcase } from "./components/FeatureShowcase";
import { WhyRemivo } from "./components/WhyRemivo";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <FeatureShowcase />
      <WhyRemivo />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}