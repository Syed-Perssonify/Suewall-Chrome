import Hero from "./(home)/_hero";
import CTA from "./(home)/_cta";
import { Footer } from "@/commen/element/layout/footer";
import Feature from "./(home)/_feature";
import FAQ from "./(home)/_faq";
import { HowItWorks } from "./(home)/_howItWorks";
import Header from "@/commen/element/layout/header";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <HowItWorks />
      <Feature />
      <FAQ />
      {/* <CTA /> */}
      <Footer />
    </>
  );
}
