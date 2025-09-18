import { mediaUrl } from "@/commen/config/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Feature() {
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
                Stay Informed -{" "}
                <span className="text-primary">Protect Your Investments.</span>{" "}
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl lg:max-w-3xl leading-relaxed tracking-tight text-gray font-galano text-left">
                Our Chrome Extension puts shareholder rights at your fingertips.
                Detect litigation risk directly on finance pages, receive
                real-time alerts, and learn more about how to take legal action
                with ease — without missing critical deadlines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <img
                  src={mediaUrl("/images/feature/reduce-risk-exposure.webp")}
                  alt="Active Case Checker"
                  width={100}
                  height={100}
                  className="w-full h-60 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                Reduce Risk Exposure
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                Spot litigation tied to your holdings early so you can act
                quickly — adjusting positions, diversifying, or engaging with
                cases before risks escalate.
              </p>
            </div>

            <div className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <img
                  src={mediaUrl("/images/feature/maximize-recovery.webp")}
                  alt="Instant Notifications"
                  width={100}
                  height={100}
                  className="w-full h-60 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                Maximize Recovery
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                Never miss out on potential settlement opportunities that could
                return funds to your portfolio, ensuring you claim what you’re
                entitled to when companies face accountability.
              </p>
            </div>

            <div className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <img
                  src={mediaUrl(
                    "/images/feature/better-portfolio-oversight.webp"
                  )}
                  width={100}
                  height={100}
                  className="w-full h-60 object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                Better Portfolio Oversight
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                Consolidated case alerts make it easy to track litigation across
                multiple holdings, giving you a clearer view of overall
                portfolio risk and long-term stability.
              </p>
            </div>
          </div>

          <div className="text-center mt-2 border-t border-gray">
            <p className="text-base sm:text-lg font-galano mb-6 sm:mb-10 mt-7">
              Trusted by thousands of investors across the United States
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-md sm:text-md font-galano-medium">
              <span className="flex items-center gap-2">
                <img
                  src="/icons/instant-setup.svg"
                  alt="Free to Install"
                  className="w-5 h-5"
                />
                Free to Install
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/icons/no-personal-data-required.svg"
                  alt="No Personal Data Required"
                  className="w-5 h-5"
                />
                No Personal Data Required
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/icons/cloud-arrow-down.svg"
                  alt="Instant Setup"
                  className="w-5 h-5"
                />
                Instant Setup
              </span>
            </div>
            <div className="border-b border-gray mt-7"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature };
