import React from "react";
import Navbar from "./Navbar";

const Hero: React.FC = () => {
  return (
    <div
      id="hero"
      className="relative min-h-[100svh] w-screen max-w-[100vw] overflow-x-hidden bg-no-repeat"
      style={{
        backgroundImage: "url('/banner_bg.png')",
        backgroundSize: "min(45%, 450px)",
        backgroundPosition: "clamp(10px, 3vw, 30px) clamp(40px, 10vw, 100px)",
      }}
    >
      {/* Fixed position navbar wrapper */}
      <div className="w-full max-w-[100vw] overflow-x-hidden">
        <Navbar />
      </div>

      <div className="relative mx-auto px-4 sm:px-6 h-[calc(100svh-60px)] max-w-[100vw] overflow-x-hidden">
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-2">
          {/* Image space */}
          <div className="hidden lg:block" aria-hidden="true"></div>

          {/* Text content */}
          <div className="flex items-center justify-center lg:justify-start">
            <div
              className={`
                relative 
                w-full 
                max-w-[90vw] 
                lg:max-w-none 
                text-center 
                lg:text-left
                pt-4 
                sm:pt-8 
                md:pt-12
                pb-8
              `}
            >
              <p
                data-aos="zoom-in-up"
                className={`
                  font-bold 
                  text-[clamp(2rem,8vw,5rem)] 
                  leading-[1.1] 
                  tracking-tight
                  mb-2 
                  sm:mb-3
                  whitespace-nowrap
                `}
              >
                I&apos;m
              </p>
              <p
                data-aos="zoom-in-up"
                className={`
                  font-bold 
                  text-[clamp(2rem,8vw,5rem)] 
                  leading-[1.1] 
                  tracking-tight
                  mb-2 
                  sm:mb-3
                  whitespace-nowrap
                `}
              >
                Muhammad
              </p>
              <p
                data-aos="zoom-in-up"
                className={`
                  font-bold 
                  text-[clamp(2rem,8vw,5rem)] 
                  leading-[1.1] 
                  tracking-tight
                  whitespace-nowrap
                `}
              >
                Umer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
