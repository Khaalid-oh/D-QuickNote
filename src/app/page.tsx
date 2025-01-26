import Image from "next/image";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Clear, structured notes in seconds.
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Take high-quality, AI-powered notes with AI prompts to help you
              craft well-structured notes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/signup"
                className="px-6 py-3 rounded-lg bg-blue-400 text-white hover:bg-blue-500 font-medium"
              >
                Try Now
              </a>
              <a
                href="/templates"
                className="px-6 py-3 rounded-lg border border-foreground/20 hover:bg-foreground/5 font-medium flex items-center gap-2"
              >
                <span>View</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/right.png"
              alt="Doctor taking notes"
              className="rounded-lg shadow-2xl"
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
