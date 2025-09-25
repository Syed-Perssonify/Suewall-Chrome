import { mediaUrl } from "@/commen/config/utils";
import { params } from "@/commen/config/params";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface TrustedBenefit {
  icon: string;
  text: string;
  alt: string;
}

export default function Feature() {
  const { features } = params;

  return (
    <section
      id="features"
      className="w-full py-16 md:py-24 lg:py-32 -mt-20 scroll-mt-24"
    >
      <div className="zlk-container">
        <div className="flex flex-col gap-12 sm:gap-16">
          <div className="flex gap-4 sm:gap-6 flex-col items-start">
            <div className="flex gap-3 sm:gap-4 flex-col">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter max-w-4xl font-plantin text-left text-gray-500">
                {features.title} -{" "}
                <span className="text-primary">{features.titleHighlight}</span>{" "}
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl lg:max-w-3xl leading-relaxed tracking-tight text-gray font-galano text-left">
                {features.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.cards.map((card: FeatureCard, index: number) => (
              <div
                key={index}
                className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300"
              >
                <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                  <img
                    src={mediaUrl(card.image)}
                    alt={card.alt}
                    width={100}
                    height={100}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-2 border-t border-gray">
            <p className="text-base sm:text-lg font-galano mb-6 sm:mb-10 mt-7">
              {features.trusted.title}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-md sm:text-md font-galano-medium">
              {features.trusted.benefits.map(
                (benefit: TrustedBenefit, index: number) => (
                  <span key={index} className="flex items-center gap-2">
                    <img
                      src={benefit.icon}
                      alt={benefit.alt}
                      className="w-5 h-5"
                    />
                    {benefit.text}
                  </span>
                )
              )}
            </div>
            <div className="border-b border-gray mt-7"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature };
