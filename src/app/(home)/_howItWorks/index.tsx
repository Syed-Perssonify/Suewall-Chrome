import React from "react";
import { params } from "@/commen/config/params";
import { mediaUrl } from "@/commen/config/utils";

export const HowItWorks = () => {
  const { title, subtitle, steps, benefits } = params.howItWorks;

  return (
    <section id="howitworks" className="py-16 -mt-2 scroll-mt-24">
      <div className="zlk-container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-gray-500 font-plantin text-balance mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray font-galano max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <h3 className="text-xl font-plantin mb-4 text-balance">
                {step.title}
              </h3>
              <p className="text-gray font-galano leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-primary/5 border border-black rounded-2xl w-full p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-plantin text-balance mb-4 text-gray-500">
              Why Shareholders Choose This Extension
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <img
                  src={mediaUrl(benefit.images)}
                  alt={benefit.title}
                  className="h-11 mx-auto mb-4"
                  loading="lazy"
                />
                <h4 className="text-xl font-plantin mb-3 text-balance">
                  {benefit.title}
                </h4>
                <p className="text-gray font-galano leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
