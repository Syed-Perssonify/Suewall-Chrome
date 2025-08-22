import Image from "next/image";
import Hero from "./(home)/_hero";
import { Header } from "@/commen/element/layout/header";
import CTA from "./(home)/_cta";
import { Footer } from "@/commen/element/layout/footer";
import { DotsBackground } from "@/commen/element/layout/dots-background";
import Feature from "./(home)/_feature";

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <div className="relative">
        <DotsBackground />
        <Hero />
      </div>
      <Feature />
      <CTA />
      <Footer />
    </div>
  );
}
