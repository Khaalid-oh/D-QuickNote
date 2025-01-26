import Image from "next/image";
import React from "react";
import BadgeGroup from "./components/badgeGroup";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-1">
            <BadgeGroup />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Clear, structured notes in seconds.
            </h1>
            <p className="mt-4 text-lg text-gray-600 md:w-3/4">
              Take high-quality, AI-powered notes with AI prompts to help you
              craft well-structured notes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/templates"
                className="px-6 py-3 rounded-lg border text-blue-400 border-blue-400 border-foreground/20 hover:bg-blue-50 font-medium flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Demo
              </a>
              <a
                href="/signup"
                className="px-6 py-3 rounded-lg bg-blue-400 text-white hover:bg-blue-500 font-medium"
              >
                Free Trial
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/right.png"
              alt="Doctor taking notes"
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
