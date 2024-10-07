/* eslint-disable react/no-unescaped-entities */
////assets
//images
import memojiImage from "@/assets/images/memoji-computer.png";
//icons
import ArrowDown from "@/assets/icons/arrow-down.svg";
//
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="memoji-computer"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 rounded-full size-2.5"></div>

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

          <button className="inline-flex items-center  gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
