"use client"
import React, {useState} from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  const [aboutMePressed, setAboutMePressed] = useState(false);

  const toggleAboutMe = () => {
    setAboutMePressed((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <header className="navbar bg-base-200 px-6 shadow-sm">
        <div className="flex-1">
          <span className="text-lg font-semibold tracking-wide text-primary">
            Oliver Brown
          </span>
        </div>
        <nav className="flex-none">
          <ul className="menu menu-horizontal gap-2 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-primary-focus">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-primary-focus">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-focus">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="px-6 py-12">
        <Hero buttonOnClick={toggleAboutMe}/>

        <About aboutMePressed={aboutMePressed} toggleAboutMe={toggleAboutMe}  />

        <Portfolio />

        <Contact />
      </main>
    </div>
  );
}
