"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="QuickNote Logo"
                width={148}
                height={26}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-foreground/80">
              Home
            </Link>
            <Link
              href="/templates"
              className="hover:text-foreground/80 flex items-center gap-1"
            >
              Templates
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link href="/pricing" className="hover:text-foreground/80">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-foreground/80">
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 text-blue-400 border-blue-400 border rounded-lg hover:bg-blue-50"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-foreground/5"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="px-4 py-2 hover:bg-foreground/5 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/templates"
                className="px-4 py-2 hover:bg-foreground/5 rounded-lg"
              >
                Templates
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-2 hover:bg-foreground/5 rounded-lg"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 hover:bg-foreground/5 rounded-lg"
              >
                Contact
              </Link>
              <div className="border-t border-foreground/10 pt-4">
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-foreground/5 rounded-lg"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-2 mt-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg text-center"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
