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
            {/* <div>
              <Badge className="bg-primary text-black font-galano-medium px-3 sm:px-4 py-2 text-sm sm:text-md">
                Chrome Extension
              </Badge>
            </div> */}
            <div className="flex gap-3 sm:gap-4 flex-col">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter max-w-4xl font-plantin text-left text-gray-500">
                Track{" "}
                <span className="text-primary">Active Securities Cases</span>{" "}
                Instantly with Our Chrome Extension
              </h2>
              <p className="text-lg sm:text-xl max-w-2xl lg:max-w-3xl leading-relaxed tracking-tight text-gray font-galano text-left">
                Stay informed and in control. Our Chrome Extension automatically
                detects ticker symbols on supported finance sites, checks for
                active securities litigation cases in real time, and lets you
                securely join cases or manage claims — all without leaving your
                browser.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <Image
                  src="/images/feature/1.png"
                  alt="Active Case Checker"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                Active Case Checker
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                Instantly check if any of your investments are involved in
                active securities litigation cases. Get real-time updates on
                case status and deadlines.
              </p>
            </div>

            <div className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <Image
                  src="/images/feature/2.png"
                  alt="Instant Notifications"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                Instant Notifications
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                Receive immediate alerts when new cases are filed, settlements
                are reached, or important deadlines are approaching for your
                investments.
              </p>
            </div>

            <div className="group flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-primary transition-all duration-300">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <Image
                  src="/images/feature/3.png"
                  alt="Claims Management"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-plantin text-dark-green">
                Easy to Join
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base font-galano leading-relaxed">
                Seamlessly join securities litigation cases directly from your
                browser. Our extension guides you through the process step by
                step, making it simple and hassle-free.
              </p>
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="text-base sm:text-lg text-gray font-galano mb-6 sm:mb-10">
              Trusted by thousands of investors across the United States
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-md text-gray font-galano-medium">
              <span>✓ Free to Install</span>
              <span>✓ No Personal Data Required</span>
              <span>✓ Instant Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Feature };
