import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="w-full py-20 lg:py-40 -mt-20">
      <div className="zlk-container">
        <div className="flex flex-col gap-16">
          <div className="flex gap-6 flex-col items-start">
            <div>
              <Badge className="bg-primary text-black font-galano-medium px-4 py-2 text-sm">
                Chrome Extension
              </Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter max-w-4xl font-plantin text-left text-dark-green">
                Streamline Your{" "}
                <span className="text-primary">Claims Management</span> with Our
                Chrome Extension
              </h2>
              <p className="text-xl max-w-2xl lg:max-w-3xl leading-relaxed tracking-tight text-gray font-galano text-left">
                Managing securities litigation cases is already complex. Our
                Chrome Extension makes it easier and faster than ever to track
                active cases, manage claims, and stay updated on your
                investments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <Image
                  src="/images/feature/active-case-checker.png"
                  alt="Active Case Checker"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl tracking-tight font-plantin text-dark-green">
                Active Case Checker
              </h3>
              <p className="text-muted-foreground text-base font-galano leading-relaxed">
                Instantly check if any of your investments are involved in
                active securities litigation cases. Get real-time updates on
                case status and deadlines.
              </p>
            </div>

            <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <Image
                  src="/images/feature/instant-notifications.png"
                  alt="Instant Notifications"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl tracking-tight font-plantin text-dark-green">
                Instant Notifications
              </h3>
              <p className="text-muted-foreground text-base font-galano leading-relaxed">
                Receive immediate alerts when new cases are filed, settlements
                are reached, or important deadlines are approaching for your
                investments.
              </p>
            </div>

            <div className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
              <div className="bg-transparent rounded-xl aspect-video mb-2 flex items-center justify-center">
                <Image
                  src="/images/feature/claims-management.png"
                  alt="Claims Management"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl tracking-tight font-plantin">
                Claims Management
              </h3>
              <p className="text-muted-foreground text-base font-galano leading-relaxed">
                Organize and track all your claims in one place. Monitor filing
                deadlines, settlement amounts, and case progress with our
                intuitive dashboard.
              </p>
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="text-lg text-gray font-galano mb-10">
              Trusted by thousands of investors across the United States
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray font-galano-medium">
              <span>✓ Free to Install</span>
              <span>✓ No Personal Data Required</span>
              <span>✓ Instant Setup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
