import React from "react";

const Tag = ({ text }) => {
  return (
    <div className="bg-[#E5E7EB] dark:bg-[#374151] px-[20px] py-[4px] rounded-[12px] body3-medium text-[#4B5563] dark:text-[#D1D5DB]">
      {text}
    </div>
  );
};

export default Tag;
