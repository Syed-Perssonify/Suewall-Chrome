import Image from "next/image";
import Hero from "./(home)/_hero";
import { Header } from "@/commen/element/layout/header";

export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Hero />
    </div>
  );
}
