"use client";
import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Work from "../components/work";
import Testimonials from "../components/testimonials";
import GetInTouch from "../components/getInTouch";
import Footer from "../components/footer";
import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState(
    localStorage.getItem("color-theme") || "light"
  );
  return (
    <main className="dark:bg-[#030712] relative">
      <Header mode={mode} setMode={setMode} />
      <Hero mode={mode} setMode={setMode} />
      <AboutMe mode={mode} setMode={setMode} />
      <Skills mode={mode} setMode={setMode} />
      <Experience mode={mode} setMode={setMode} />
      <Work mode={mode} setMode={setMode} />
      <Testimonials mode={mode} setMode={setMode} />
      <GetInTouch mode={mode} setMode={setMode} />
      <Footer mode={mode} setMode={setMode} />
    </main>
  );
}
