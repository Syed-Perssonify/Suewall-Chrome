import type { Metadata } from "next";
import "./iframe.css";

export const metadata: Metadata = {
  title: "Chrome Extension - Iframe",
  description: "Chrome Extension Interface",
};

export default function IframeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
