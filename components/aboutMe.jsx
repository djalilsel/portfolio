import icons from "../assets";
import Tag from "@/components/Tag";

function AboutMe() {
  return (
    <div className="xl:h-screen bg-[#f9fafb] dark:bg-[#111827] px-[16px] py-[64px] xl:px-[250px] xl:py-[96px] flex flex-col items-center gap-[60px] xl:gap-[48px]  ">
      <Tag text="About Me" />
      <div className="flex flex-col xl:flex-row flex-1 w-full gap-8 xl:gap-0">
        <div className="flex-1 relative flex justify-center xl:justify-normal items-center">
          <div className="bg-gray-300 dark:bg-[#374151] w-[340px] h-[300px] flex justify-center relative">
            <img
              src={icons.heroMe.src}
              className="w-[300px] border-8 border-[#f9fafb] dark:border-[#111827] absolute xl:left-10 xl:bottom-10 bottom-10"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-[24px]">
          <div className="h3-desk-semi text-[#111827] dark:text-[#F9FAFB]">
            Curious about me? Here you have it:
          </div>
          <div className="body2 flex flex-col gap-[16px] text-[#4B5563] dark:text-[#D1D5DB]">
            <div>
              I'm a passionate, self-proclaimed web developer who specializes in
              full stack development (React.js & Node.js). I am enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2021, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, 3 years after starting my web development journey, I'm
              building cutting-edge web applications using modern technologies
              such as Next.js, MaterialUI, Tailwindcss, Supabase and much more.
            </div>
            <div>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div>
              When I'm not buried in textbooks or coding away, you'll likely
              spot me on{" "}
              <a
                href="https://www.linkedin.com/in/abdeldjalilselamnia/"
                target="_blank"
                className="body2-underline"
              >
                LinkedIn
              </a>
              , where I'm constantly expanding my professional network, learning
              from industry leaders, and seeking out exciting opportunities to
              grow and develop. You can follow me there, or you can follow me on{" "}
              <a
                href="https://github.com/djalilsel"
                target="_blank"
                className="body2-underline"
              >
                Github
              </a>
              .
            </div>
            <div>Finally, some quick bits about me.</div>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-2 list-disc list-inside">
              <li>Second year engineering student</li>
              <li>Passionate learner</li>
              <li>Team player</li>
              <li>Creative problem solver</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
