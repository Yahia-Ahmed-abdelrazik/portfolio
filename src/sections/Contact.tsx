/* eslint-disable react/no-unescaped-entities */
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="z-0 overflow-hidden bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative">
          <div className="absolute inset-0 opacity-5 -z-50">
            <Image src={grainImage} alt="grain" className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-8  md:gap-16 items-center md:flex-row ">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create someting amazing together
              </h2>
              <p className="text-sm  mt-2 md:text-base">
                Ready to bring Your next project to life? Let's conect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
