import React from "react";

const Skill = ({ text, img, url }) => {
  return (
    <div className="flex flex-col items-center gap-[8px] " target="_blank">
      <a href={url}>
        <img
          src={img.src}
          className="w-[64px] h-[64px] hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </a>
      <div className=".body1 text-[#4B5563] text-lg dark:text-[#D1D5DB]">
        {text}
      </div>
    </div>
  );
};

export default Skill;
