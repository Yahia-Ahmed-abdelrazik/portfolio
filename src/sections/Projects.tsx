"use client";
//images
import gemini from "@/assets/images/gemini.png";
import netflex from "@/assets/images/netflex.png";
import monster from "@/assets/images/monster.png";
import pizza from "@/assets/images/pizza.png";
import ecommerse from "@/assets/images/ecommerse.png";
import quiz from "@/assets/images/quiz.png";
import greenWorld from "@/assets/images/greenWorld.png";
import ECommerce from "@/assets/images/ECommerce.png";
import shoppingEcommerce from "@/assets/images/shoppingEcommerce.png";
import todo from "@/assets/images/todo.png";
import tabeebak from "@/assets/images/tabeebak.jpg";

//icons
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
//components
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
//
import Image from "next/image";
import { useEffect, useRef } from "react";

const portfolioProjects = [
  {
    company: "Gemini",
    year: "2024",
    title: "Gemini Ai Chat",
   results: [
  { title: "Built a fully responsive and mobile-friendly UI" },
  { title: "Recreated Gemini’s clean and minimal design aesthetics" },
  { title: "Optimized performance and smooth user interactions" },
],
    link: "https://yahia-gemini-clone.surge.sh/",
    image: gemini,
  },{
  company: "Tabeebak",
  year: "2024",
  title: "Full-Stack Doctor Appointment Platform",
  results: [
    { title: "Developed user and doctor dashboards with role-based access control" },
    { title: "Implemented secure authentication and authorization using JWT" },
    { title: "Built appointment booking system with MongoDB and Express.js backend" },
  ],
  link: "https://github.com/Yahia-Ahmed-abdelrazik/Tabeebak",
  image: tabeebak,
},{
  company: "E-commerce",
  year: "2025",
  title: "React E-commerce Shopping App",
  results: [
    { title: "Developed a dynamic shopping interface using React components" },
    { title: "Implemented product listing, cart functionality, and responsive design" },
    { title: "Optimized user interactions for smooth and fast performance" },
  ],
  link: "https://shopping-e-commerce-sigma.vercel.app/",
  image: shoppingEcommerce,
},
  {
    company: "Netflex",
    year: "2025",
    title: "Netflex Movie App",
     results: [
    { title: "Developed a dynamic movie browser using TMDb API" },
    { title: "Implemented responsive design with smooth navigation" },
    { title: "Integrated features like search, favorites, and detail pages" },
  ],
    link: "https://netflix-nine-alpha.vercel.app/",
    image: netflex,
  },{
  company: "E-commerce",
  year: "2025",
  title: "Modern E-commerce Storefront App",
  results: [
    { title: "Designed a clean and responsive user interface" },
    { title: "Implemented product listing with cart functionality" },
    { title: "Enabled smooth user experience across all devices" },
  ],
  link: "https://react-e-commerce-ochre.vercel.app/",
  image: ECommerce,
},
  {
    company: "Monster",
    year: "2024",
    title: "Monster Landing Page",
  results: [
    { title: "Built a static landing page using HTML, CSS, and JavaScript" },
    { title: "Designed a clean and attractive layout to showcase the product" },
    { title: "Ensured responsive design for mobile and desktop devices" },
  ],
    link: "https://yahia-ahmed-abdelrazik.github.io/landing-monister/",
    image: monster,
  },
  {
    company: "pizza",
    year: "2024",
    title: "Pizza Menu",
   results: [
    { title: "Developed a single-page menu interface using React" },
    { title: "Displayed pizza items with a clean and responsive layout" },
    { title: "Used reusable components for maintainable code structure" },
  ],
    link: "https://pizza-menu-yahia.surge.sh/",
    image: pizza,
  },
  {
    company: "ecommerse",
    year: "2024",
    title: "Ecommerse App Stor",
    results: [
    { title: "Built a multi-section static e-commerce page without frameworks" },
    { title: "Styled a modern and responsive layout using pure CSS" },
    { title: "Implemented basic product display with interactive UI elements" },
  ],
    link: "https://ecommerce-yahia-ahmed.surge.sh/",
    image: ecommerse,
  },{
  company: "To-Do App",
  year: "2024",
  title: "React To-Do List Application",
  results: [
    { title: "Built a responsive task management interface using React" },
    { title: "Enabled adding, deleting, and marking tasks as complete" },
    { title: "Used localStorage to persist tasks between sessions" },
  ],
  link: "https://to-do-list-rose-alpha-23.vercel.app/",
  image: todo,
},
  {
    company: "greenWorld",
    year: "2024",
    title: "GreenWorld",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://github.com/Yahia-Ahmed-abdelrazik/summer-training-front-end/tree/main/week%20one/task1",
    image: greenWorld,
  },
];

//
interface ProjectsSectionProps {
  setActiveSection: (section: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
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

        if (scroll > offset - 50 && scroll < offset + highth) {
          // console.log("true");
          setActiveSection("projects");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  return (
    <section ref={inputRef} id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world projects"
          title="Featured Projects"
          description="See how I transform conxepts into engaging digital experiences."
        />
        {/* card */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: "calc(64px + " + projectIndex * 40 + "px)",
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-wider text-sm  text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-4 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 md:mt-5  border-t-2 border-white/5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 w-full md:w-auto px-6 rounded-xl h-12 font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-5" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-tl-3xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
