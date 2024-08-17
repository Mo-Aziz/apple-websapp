import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  // handle video source based on window width.
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  // implement handleVideoSrc function here for video source change.
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);
    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  // implement useGSAP hook here for p element motion.
  useGSAP(() => {
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
    gsap.to("#hero", { opacity: 1, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 16 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* section 2 cta */}
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="front-normal text-xl">From $49/month Or $999 </p>
      </div>
    </section>
  );
};

export default Hero;
