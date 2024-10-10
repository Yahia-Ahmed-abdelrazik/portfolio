//components
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
//icons
import StarIcon from "@/assets/icons/star.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
//imgs
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
//
import Image from "next/image";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "./ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  { title: "Painting", icon: "🎨", left: "5%", top: "5%" },
  { title: "Photography", icon: "📸", left: "50%", top: "0%" },
  { title: "Gaming", icon: "🎮", left: "10%", top: "35%" },
  { title: "Music", icon: "🎧", left: "40%", top: "40%" },
  { title: "Fitness", icon: "🏋", left: "5%", top: "75%" },
  { title: "Readind", icon: "📚", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  return (
    <div className="py-20 ">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am , what i do , and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-6">
          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore The books shaping my perspective."
              />

              <div className="w-40 mx-auto mt-8">
                <Image src={bookImage} alt="book" className="w-fit h-fit" />
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3">
              <CardHeader
                title="My Toolbox"
                className="px-6 pt-6"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />

              <ToolboxItems items={toolboxItems} className="mt-6" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0  flex flex-col md:col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Explore myintests and hobbis the digital realm"
                className="px-6 py-6"
              />

              <div className="relative flex-1">
                {hobbies.map((hobbie) => (
                  <div
                    key={hobbie.title}
                    className="absolute inline-flex items-center gap-2 py-1.5 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full "
                    style={{
                      left: hobbie.left,
                      top: hobbie.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobbie.title}
                    </span>
                    <span>{hobbie.icon}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0  relative md:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover"
              />
              <div className="absolute size-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-300 to-sky-400  rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:outline after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
