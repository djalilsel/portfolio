import React from "react";
import Tag from "./Tag";
import icons from "../assets";
import Skill from "./Skill";

function Skills({ mode, setMode }) {
  return (
    <div className="h-[60vh] dark:bg-[#030712] xl:px-[350px] flex flex-col xl:py-[96px] gap-[48px] items-center">
      <div className="flex flex-col gap-[16px] items-center">
        <Tag text="Skills" />
        <span className=".subtitle text-xl text-[#4B5563] dark:text-[#D1D5DB]">
          The skills, tools and technologies I am really good at:
        </span>
      </div>
      <div className="grid grid-cols-8 w-full gap-y-[48px]">
        <Skill
          text="Html"
          img={icons.html}
          url="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <Skill
          text="Css"
          img={icons.css}
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <Skill
          text="Javascript"
          img={icons.javascript}
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Skill text="React.js" img={icons.react} url="https://react.dev/" />
        <Skill text="Next.js" img={icons.nextjs} url="https://nextjs.org/" />
        <Skill text="Node.js" img={icons.nodejs} url="https://nodejs.org/en" />
        {mode == "light" && (
          <Skill
            text="Express.js"
            img={icons.express}
            url="https://expressjs.com/"
          />
        )}
        {mode == "dark" && (
          <Skill
            text="Express.js"
            img={icons.expressDark}
            url="https://expressjs.com/"
          />
        )}
        <Skill
          text="Mongodb"
          img={icons.mongodb}
          url="https://www.mongodb.com/"
        />
        <Skill
          text="Tailwindcss"
          img={icons.tailwindcss}
          url="https://tailwindcss.com/"
        />
        <Skill text="Git" img={icons.git} url="https://git-scm.com/" />
        <Skill
          text="Firebase"
          img={icons.firebase}
          url="https://firebase.google.com/"
        />
        <Skill text="Mysql" img={icons.mysql} url="https://www.mysql.com/" />
      </div>
    </div>
  );
}

export default Skills;
