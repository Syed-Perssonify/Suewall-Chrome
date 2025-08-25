"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Facebook,
} from "lucide-react";
import { params } from "@/commen/config/params";

function Footer() {
  const { footer } = params;

  return (
    <footer className="py-12 px-4 md:px-6 bg-background">
      <div className="zlk-container">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-primary">
                {footer.company.name}
              </h2>
            </Link>

            <h1 className="mt-4">{footer.company.tagline}</h1>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-md text-black">
                <MapPin className="h-4 w-4" />
                <span>{footer.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-md text-black">
                <Phone className="h-4 w-4" />
                <span>{footer.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-md text-black">
                <Mail className="h-4 w-4" />
                <span>{footer.contact.email}</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {footer.services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-black hover:text-primary"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footer.companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-black hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                {footer.social.map((social, index) => (
                  <li key={index}>
                    <Link
                      href={social.href}
                      className="text-black hover:text-primary flex items-center gap-2"
                    >
                      {social.icon === "Facebook" && (
                        <Facebook className="h-4 w-4" />
                      )}
                      {social.icon === "Linkedin" && (
                        <Linkedin className="h-4 w-4" />
                      )}
                      {social.icon === "Twitter" && (
                        <Twitter className="h-4 w-4" />
                      )}
                      {social.icon === "Mail" && <Mail className="h-4 w-4" />}
                      {social.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footer.legal.map((legal, index) => (
                  <li key={index}>
                    <Link
                      href={legal.href}
                      className="text-black hover:text-primary"
                    >
                      {legal.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-8">
          <p className="text-md">{footer.copyrightText}</p>
          <p className="text-md mt-2 underline">{footer.builtBy}</p>
        </div>
        <div className="w-full items-center justify-center mt-4">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[8rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/70 select-none">
            {footer.company.name}
          </h1>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
