"use client";
/* eslint-disable react/no-unescaped-entities */
////assets
//images
import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
//icons
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
//
import Image from "next/image";
import { HeroOrbit } from "@/components/HeroOrbit";
import { useEffect, useRef } from "react";

//
interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveSection,
}) => {
  //to activate navbar on scroll
  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (inputRef.current) {
        let offset = inputRef.current.offsetTop;
        let highth = inputRef.current.offsetHeight;
        let scroll = window.scrollY;
        // console.log("offset", offset, "highth", highth, "scroll", scroll);
        if (scroll > offset && scroll < offset + highth ) {
          setActiveSection("home");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  return (
    <div
      ref={inputRef}
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip "
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_40%,black_60%,black_70%,transparent)] pointer-events-none">
        {/* background image */}
        <div
          className=" absolute inset-0 -z-50 opacity-5 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {/* rings */}
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        {/* stars */}
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbiteDuration={38}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbiteDuration={40}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbiteDuration={48}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        {/* Sparkles */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbiteDuration={30}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbiteDuration={32}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbiteDuration={36}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbiteDuration={44}
          shouldSpin
          spinDuration={3}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        {/* circles */}
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbiteDuration={34}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbiteDuration={42}>
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbiteDuration={46}>
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
      </div>
      {/*  */}
      <div className="container select-none">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="memoji-computer"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 rounded-full size-2.5 relative">
              <div className="bg-emerald-300 rounded-full size-2.5 absolute animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-center mt-8 text-3xl md:text-5xl tracking-wide">
            Building Exceptional User Experiences
          </h1>

          <p className="text-center mt-4 text-white/60 md:text-lg">
            I Speciaize in transforming design into functional, high-performing
            wep applications. Let's discuss your next project.
          </p>
        </div>

        <div className="flex flex-col md:flex-row  gap-4 justify-center items-center mt-8">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>

          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
