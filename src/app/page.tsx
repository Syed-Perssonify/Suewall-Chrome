import Image from "next/image";
import Hero from "./(home)/_hero";
import { Header } from "@/commen/element/layout/header";
import CTA from "./(home)/_cta";
import { Footer } from "@/commen/element/layout/footer";
import { DotsBackground } from "@/commen/element/layout/dots-background";
import Feature from "./(home)/_feature";
import FAQ from "./(home)/_faq";
import { HowItWorks } from "./(home)/_howItWorks";

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
