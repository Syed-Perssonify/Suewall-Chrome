import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./suewallst.css";
// import "./globals.css";
import { params } from "@/commen/config/params";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: params.name,
  description: params.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Project:", process.env.NEXT_PUBLIC_PROJECT);
  console.log(
    "process.env.NEXT_PUBLIC_PROJECT:",
    process.env.NEXT_PUBLIC_PROJECT === "suewallstreet"
  );

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
