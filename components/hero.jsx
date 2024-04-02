import icons from "../assets";

function Hero({ mode }) {
  return (
    <div className="xl:h-full h-screen py-[64px] px-[16px] xl:px-[250px] xl:py-[96px] dark:text-gray-50 flex xl:flex-row flex-col-reverse">
      <div className="flex-1 flex flex-col gap-[30px] h1-phone xl:gap-[48px]">
        <div className="flex flex-col xl:gap-[8px]">
          <div className="text-[#030712] dark:text-[#f9fafb]  xl:h1-desk">
            Hi, I'm Abd eldjalil 👋
          </div>
          <div className="body2 text-[#4B5563] dark:text-[#D1D5DB]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive.
          </div>
        </div>
        <div className="flex flex-col gap-[8px] body2 text-[#4B5563] dark:text-[#D1D5DB]">
          <div className="flex items-center gap-4">
            <img
              src={
                mode == "light" ? icons.location24L.src : icons.location24D.src
              }
              className="w-4 h-4"
            />
            Setif, Algeria
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-500 w-3 h-3"></div> Available
            for hiring
          </div>
        </div>
        <div>
          <img
            className="w-8 h-8 text-[#f9fafb] hover:bg-gray-100 active:bg-[#E5E7EB] dark:hover:bg-[#1F2937] dark:active:bg-[#374151] rounded-md p-1 select-none cursor-pointer"
            src={mode == "light" ? icons.github24L.src : icons.github24D.src}
            onClick={() =>
              window?.open("https://github.com/djalilsel", "_blank")
            }
          />
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="bg-gray-300 dark:bg-[#374151] w-[300px] h-[280px] absolute top-10 left-[40px] xl:left-60"></div>
        <img
          src={icons.heroMe.src}
          className="w-[280px]  border-8 border-white dark:border-[#030712] absolute top-0 left-[50px] xl:left-52"
        />
      </div>
    </div>
  );
}

export default Hero;
