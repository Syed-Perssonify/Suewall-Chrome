// Chrome Extension Content Script
// Injects a shadow root with Tailwind CSS and mounts a styled div

interface ChromeMessage {
    action: string;
    data?: any;
  }
  
  interface ChromeResponse {
    success: boolean;
  }
  
  const initializeExtensionUI = (): void => {
    // Prevent multiple injections
    if (document.querySelector("#chrome-extension-shadow-host")) {
      return;
    }
  
    try {
      // Create the shadow host element
      const shadowHost = document.createElement("div");
      shadowHost.id = "chrome-extension-shadow-host";
      shadowHost.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 2147483647;
        width: 320px;
        height: auto;
        pointer-events: auto;
      `;
  
      // Create shadow root
      const shadowRoot = shadowHost.attachShadow({ mode: "closed" });
  
      // Create and inject Tailwind CSS link
      const tailwindLink = document.createElement("link");
      tailwindLink.rel = "stylesheet";
      tailwindLink.href = chrome.runtime.getURL("tailwind.css");
      shadowRoot.appendChild(tailwindLink);
  
      // Create the main container div with Tailwind classes
      const container = document.createElement("div");
      container.className = "tw-bg-white tw-rounded-lg tw-shadow-xl tw-border tw-border-gray-200 tw-p-6 tw-max-w-sm";
      container.innerHTML = `
        <div class="tw-flex tw-items-center tw-justify-between tw-mb-4">
          <h3 class="tw-text-lg tw-font-semibold tw-text-gray-900">Active Case Checker</h3>
          <button id="close-btn" class="tw-text-gray-400 hover:tw-text-gray-600 tw-transition-colors">
            <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="tw-space-y-3">
          <div class="tw-bg-blue-50 tw-border tw-border-blue-200 tw-rounded-md tw-p-3">
            <p class="tw-text-sm tw-text-blue-800">Extension is active on this page</p>
          </div>
          
          <div class="tw-flex tw-space-x-2">
            <button id="scan-btn" class="tw-flex-1 tw-bg-blue-600 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium hover:tw-bg-blue-700 tw-transition-colors">
              Scan Page
            </button>
            <button id="cases-btn" class="tw-flex-1 tw-bg-gray-600 tw-text-white tw-px-3 tw-py-2 tw-rounded-md tw-text-sm tw-font-medium hover:tw-bg-gray-700 tw-transition-colors">
              View Cases
            </button>
          </div>
          
          <div class="tw-text-xs tw-text-gray-500 tw-text-center tw-mt-4">
            Powered by Levi & Korsinsky
          </div>
        </div>
      `;
  
      // Add event listeners
      const setupEventListeners = (): void => {
        const closeBtn = container.querySelector("#close-btn");
        const scanBtn = container.querySelector("#scan-btn");
        const casesBtn = container.querySelector("#cases-btn");
  
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            shadowHost.remove();
          });
        }
  
        if (scanBtn) {
          scanBtn.addEventListener("click", () => {
            handleScanPage();
          });
        }
  
        if (casesBtn) {
          casesBtn.addEventListener("click", () => {
            handleViewCases();
          });
        }
      };
  
      const handleScanPage = (): void => {
        try {
          // Add scan page logic here
          console.log("Scanning page for tickers...");
        } catch (error) {
          console.error("Error scanning page:", error);
        }
      };
  
      const handleViewCases = (): void => {
        try {
          // Add view cases logic here
          console.log("Opening cases view...");
        } catch (error) {
          console.error("Error viewing cases:", error);
        }
      };
  
      // Wait for Tailwind CSS to load before showing the container
      tailwindLink.onload = () => {
        shadowRoot.appendChild(container);
        setupEventListeners();
      };
  
      // Fallback in case the CSS doesn't load
      setTimeout(() => {
        if (!shadowRoot.contains(container)) {
          shadowRoot.appendChild(container);
          setupEventListeners();
        }
      }, 1000);
  
      // Inject the shadow host into the page
      document.body.appendChild(shadowHost);
  
      // Listen for messages from the extension popup/background
      chrome.runtime.onMessage.addListener(
        (message: ChromeMessage, sender, sendResponse: (response: ChromeResponse) => void) => {
          try {
            switch (message.action) {
              case "toggle-visibility":
                shadowHost.style.display = shadowHost.style.display === "none" ? "block" : "none";
                break;
              case "update-content":
                const contentDiv = container.querySelector(".tw-space-y-3");
                if (contentDiv && message.data) {
                  // Handle content updates here
                }
                break;
              case "scan-page":
                handleScanPage();
                break;
              default:
                console.warn("Unknown message action:", message.action);
            }
            sendResponse({ success: true });
          } catch (error) {
            console.error("Error handling message:", error);
            sendResponse({ success: false });
          }
        }
      );
    } catch (error) {
      console.error("Error initializing extension UI:", error);
    }
  };
  
  // Initialize the extension when the page loads
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeExtensionUI);
  } else {
    initializeExtensionUI();
  }
  