"use client";
//sections
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
//
import { useState } from "react";

export default function Home() {
  //
  const [activeSection, setActiveSection] = useState<string>("home");
  //
  return (
    <div>
      <Header activeSection={activeSection} />
      <HeroSection setActiveSection={setActiveSection} />
      <ProjectsSection setActiveSection={setActiveSection} />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection setActiveSection={setActiveSection} />
      <ContactSection  setActiveSection={setActiveSection}/>
      <Footer />
    </div>
  );
}
