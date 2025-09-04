"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, MapPin, Facebook } from "lucide-react";
import { params } from "@/commen/config/params";
import { routes } from "@/commen/config/routes";

function Footer() {
  const { footer } = params;

  return (
    <footer className="py-12 px-4 md:px-6 bg-background">
      <div className="zlk-container">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0 flex-1">
            <Link href={routes.website.path} className="inline-block">
              <img
                src="/images/Logo.png"
                alt="footer-logo"
                className="w-48 h-16 object-contain mb-4"
              />
            </Link>

            <h1 className="text-lg text-gray mb-4">{footer.company.tagline}</h1>
            <div className="space-y-2">
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
            <div className="mt-6">
              <Link href="/contact">
                <Button className="btn-primary">Contact Us</Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">Services</h3>
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
              <h3 className="font-semibold mb-4 text-primary">Company</h3>
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
              <h3 className="font-semibold mb-4 text-primary">Connect</h3>
              <div className="flex items-center gap-4">
                {footer.social.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-black hover:text-primary"
                  >
                    {social.icon === "Facebook" && (
                      <Facebook className="h-5 w-5" />
                    )}
                    {social.icon === "Linkedin" && (
                      <Linkedin className="h-5 w-5" />
                    )}
                    {social.icon === "Twitter" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    )}
                    {social.icon === "Mail" && <Mail className="h-5 w-5" />}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary ">Legal</h3>
              <ul className="space-y-2">
                {footer.legal.map((legal, index) => (
                  <li key={index}>
                    <Link
                      href={legal.href}
                      className="text-black hover:text-primary flex items-center gap-2"
                    >
                      {legal.label === "Privacy Policy" && (
                        <svg
                          width="30"
                          height="25"
                          viewBox="0 0 192 192"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-width="12"
                            >
                              {" "}
                              <path
                                stroke-linecap="round"
                                d="M151.8 144.5a74 74 0 0 1-85.59 19.21A74 74 0 0 1 22.42 87.7a74 74 0 0 1 59.55-64.42m28.03.06a74 74 0 0 1 50.06 35.61 74 74 0 0 1 5.915 61.15"
                              ></path>{" "}
                              <path d="M76 92h40c4.432 0 8 3.568 8 8v22c0 4.432-3.568 8-8 8H76c-4.432 0-8-3.568-8-8v-22c0-4.432 3.568-8 8-8zm4 0V77.7C80 69.029 87.163 62 96 62s16 7.029 16 15.7V92"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      )}
                      {legal.label === "Terms of Service" && (
                        <svg
                          width="30"
                          height="25"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                          enable-background="new 0 0 100 100"
                          xmlSpace="preserve"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                              {" "}
                              <path d="M69.1,28.9L55.9,15.7c-0.3-0.3-0.6-0.4-1-0.4c-0.8,0-1.4,0.6-1.4,1.4v10.6c0,2.2,1.8,4,4,4h10.6 c0.8,0,1.4-0.6,1.4-1.4C69.5,29.5,69.4,29.2,69.1,28.9z M69.5,39.3c0-1.1-0.9-2-2-2h-14c-3.3,0-6-2.7-6-6v-14c0-1.1-0.9-2-2-2h-20 c-3.3,0-6,2.7-6,6v48c0,3.3,2.7,6,6,6c0,0,18.7,0,20.3,0s2-1.1,1.9-2.8s-0.7-9,4.3-14.8s13.2-6.2,14.4-6.2c1.2,0,3.2-0.1,3.1-1.8 S69.5,39.3,69.5,39.3z M26.5,27.9l4.9-0.7c0.1,0,0.3-0.1,0.3-0.2l2.2-4.5c0.2-0.3,0.6-0.3,0.8,0l2.2,4.5c0.1,0.1,0.2,0.2,0.3,0.2 l4.9,0.7c0.3,0.1,0.5,0.5,0.2,0.7l-3.6,3.5c-0.1,0.1-0.1,0.2-0.1,0.4l0.8,4.9c0.1,0.3-0.3,0.6-0.6,0.4l-4.4-2.3 c-0.1-0.1-0.3-0.1-0.4,0l-4.4,2.3c-0.3,0.2-0.7-0.1-0.6-0.4l0.8-4.9c0-0.1,0-0.3-0.1-0.4l-3.6-3.5C26,28.4,26.2,28,26.5,27.9z M44.5,61.3c0,1.1-0.9,2-2,2h-13c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h13c1.1,0,2,0.9,2,2V61.3z M55.5,49.3c0,1.1-0.9,2-2,2h-24 c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2V49.3z"></path>{" "}
                              <path d="M66.3,56.2c-7.9,0-14.3,6.4-14.3,14.3s6.4,14.3,14.3,14.3s14.3-6.4,14.3-14.3S74.1,56.2,66.3,56.2z M68.8,71.8c-0.4,0-0.8-0.1-1.2-0.2L62.1,77c-0.4,0.4-0.8,0.5-1.2,0.5c-0.5,0-0.8-0.1-1.2-0.5c-0.6-0.6-0.6-1.7,0-2.4l5.5-5.5 C65.1,68.8,65,68.4,65,68c-0.2-2.5,1.8-4.8,4.3-4.8c0.4,0,0.8,0.1,1.2,0.2c0.2,0,0.2,0.2,0.1,0.4l-2.4,2.5c-0.2,0.1-0.2,0.5,0,0.6 l1.7,1.7c0.2,0.2,0.5,0.2,0.7,0l2.4-2.4c0.1-0.1,0.4-0.1,0.4,0.1c0.1,0.4,0.2,0.8,0.2,1.2C73.5,70,71.4,72,68.8,71.8z"></path>{" "}
                            </g>{" "}
                          </g>
                        </svg>
                      )}
                      {legal.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-12 pt-8 border-t border-gray">
          <p className="text-md text-gray">{footer.company.description}</p>
          <p className="text-md text-gray">{footer.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
