"use client";

import { useEffect, useRef } from "react";

export default function ChromeExtensionPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "CASE_JOINED") {
        console.log("Case joined:", event.data);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <iframe
        ref={iframeRef}
        src="/chrome-extension/iframe"
        className="w-full h-screen border-0"
        title="Chrome Extension Interface"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        loading="lazy"
      />
    </div>
  );
}
