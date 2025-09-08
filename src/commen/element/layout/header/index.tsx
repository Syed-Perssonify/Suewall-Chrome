"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((label: string) => {
    setActiveDropdown(prev => prev === label ? null : label);
  }, []);

  const isActiveRoute = useCallback((href: string) => {
    return pathname === href;
  }, [pathname]);


  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest('#mobile-menu')) {
        closeMobileMenu();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, closeMobileMenu]);

  return (
    <>
      <header className="bg-nav-bar sticky top-0 z-50">
        <div className="zlk-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="flex items-center rounded-md"
                aria-label="Home"
              >
                <img
                  src="https://zlk-active-case-extension.s3.us-east-1.amazonaws.com/Green+Text.png"
                  alt="Logo"
                  width={500}
                  height={600}
                  className="h-12 w-auto lg:h-16 object-contain"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                onClick={toggleMobileMenu}
                className="
                   inline-flex items-center justify-center p-2 rounded-md 
                   text-black hover:text-primary hover:bg-secondary
                   focus:outline-none
                   transition-colors duration-200
                 "
                aria-label="Toggle mobile menu"
              >
                <Menu className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
