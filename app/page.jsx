import Header from "../components/header";
import Hero from "../components/hero";
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Work from "../components/work";
import Testimonials from "../components/testimonials";
import GetInTouch from "../components/getInTouch";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </main>
  );
}
