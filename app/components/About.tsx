"use client";
import React from "react";

type AboutProps = {
  aboutMePressed: boolean;
  toggleAboutMe: () => void;
};

const About = ({ aboutMePressed, toggleAboutMe }: AboutProps) => {

  return (
    <section className="space-y-6" id="about">
      <div className="rounded-2xl border border-base-200/80 bg-base-200/60 p-6 shadow-md">

        <div className="mt-4 overflow-hidden rounded-2xl border border-base-300 bg-base-100/70">
          <button
            type="button"
            aria-expanded={aboutMePressed}
            className="flex w-full justify-center rounded-2xl bg-transparent px-4 py-3 text-3xl font-semibold text-secondary transition hover:text-secondary-focus focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            onClick={toggleAboutMe}
          >
            …
          </button>

          <div
            aria-hidden={aboutMePressed}
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              aboutMePressed ? "max-h-[240px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-6 text-base text-base-content/80">
              <p className="mb-2">
                I’m an AI engineer who pairs research-backed practices with
                hands-on product design to ship thoughtful experiences.
              </p>
              <p>
                My toolkit includes TypeScript, Next.js, Tailwind, and daisyUI
                components, constantly refined by experimentation and feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
