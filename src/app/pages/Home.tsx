import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { WhyRemivo } from "../components/WhyRemivo";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <FeatureShowcase />
      <WhyRemivo />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
