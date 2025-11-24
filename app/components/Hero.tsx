import React from "react";

type HeroProps = {
  buttonOnClick: () => void;
};

const Hero = ({ buttonOnClick }: HeroProps) => {
  return (
    <section className='hero min-h-screen' id="hero">
        <div className="hero-content text-center">
            <div className="max-w-md">
            <h1 className="text-5xl font-bold">Oliver Brown</h1>
            <p className="py-10 text-xl">
                is an <span className="font-semibold text-secondary">AI Engineer</span> based in London, recent <span className="font-semibold text-secondary">Computer Science Graduate</span> from the University of Warwick and an avid developer.
            </p>
            <button className="btn btn-primary" onClick={buttonOnClick} type="button">
              Learn more about me
            </button>
            </div>
        </div>
  
    </section>
  )
}

export default Hero
