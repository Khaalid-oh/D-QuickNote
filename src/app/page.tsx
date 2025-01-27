import Image from "next/image";
import React from "react";
import BadgeGroup from "./components/badgeGroup";

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-32">
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
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <h2 className="text-3xl font-semibold italic">
            “Creating my note was so quick and easy. The site is simple to use,
            and the results were professional. Highly recommend!”
          </h2>
          <div className="md:w-[25%] flex flex-col items-center justify-center gap-2">
            <Image src="/duser.png" alt="User" width={64} height={64} />
            <h3 className="text-lg font-bold">Dr. Emmanuel W.</h3>
            <p className="text-gray-600">Chief Resident, UITH</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-32">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold">How it works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Create professional medical notes in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border-8 border-blue-100 bg-[url('/play.png')] bg-cover bg-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-20 h-20 bg-transparent hover:bg-white/50 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                  title="Play video"
                  aria-label="Play video"
                >
                  <svg
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex gap-8">
                    <div>
                      {" "}
                      <div className="w-10 h-10 rounded-full bg-blue-100 border-blue-200 border-4 text-blue-400 flex items-center justify-center font-bold text-lg">
                        {step}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        How to create a Doctor&apos;s Note: Step {step}
                      </h3>
                      <p className="text-gray-600">
                        Give your team the autonomy they need with access to as
                        many cards as they need. Authorise purchases with a
                        click. Simple.
                      </p>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-500 inline-flex items-center gap-1"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
