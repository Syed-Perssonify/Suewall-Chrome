import React from "react";
import { params } from "@/commen/config/params";
import { Download, Globe, Shield, FileText } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Download":
      return <Download className="h-8 w-8 text-primary" />;
    case "Globe":
      return <Globe className="h-8 w-8 text-primary" />;
    case "Shield":
      return <Shield className="h-8 w-8 text-primary" />;
    case "FileText":
      return <FileText className="h-8 w-8 text-primary" />;
    default:
      return <Download className="h-8 w-8 text-primary" />;
  }
};

export const HowItWorks = () => {
  const { title, subtitle, steps, benefits } = params.howItWorks;

  return (
    <section className="py-16 -mt-2">
      <div className="zlk-container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-plantin text-balance mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray font-galano max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  {getIcon(step.icon)}
                </div>
              </div>
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
            <h3 className="text-3xl font-plantin text-balance mb-4">
              Why Choose Our Extension?
            </h3>
            <p className="text-gray font-galano text-lg">
              Built with legal professionals in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
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
