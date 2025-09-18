import Hero from "./(home)/_hero";
import { Footer } from "@/commen/element/layout/footer";
import Feature from "./(home)/_feature";
import FAQ from "./(home)/_faq";
import { HowItWorks } from "./(home)/_howItWorks";
import { Header } from "@/commen/element/layout/header";
import CTA from "./(home)/_cta";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Feature />
      <FAQ />
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
