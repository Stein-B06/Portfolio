import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault(); // Forhindrer default dragbehavior image.
  };

  return (
    <section
      id="main"
      className=" h-full py-20 md:py-32 xl:py-52 flex flex-col items-center justify-center lg:flex-row gap-28 "
    >
      <div className="flex justify-center  ">
        <div
          className={`  rounded-full w-60 h-60 md:w-72 md:h-72 relative  xl:h-96 xl:w-96  ${
            isDarkMode ? "" : ""
          }`}
        >
          <Image
            src="/Images/Randomport.jpg"
            alt="Profilbilde"
            fill
            onDragStart={handleDragStart}
            className="object-contain rounded-full"
          />
        </div>
      </div>
      <div className=" flex flex-col  xl:flex-row  items-center justify-center xl:pt-8  ">
        <div className="  text-center xl:text-left  mt-1 ">
          <span className="select-none text-base text-dark-primary dark:text-light-primary font-body">
            Junior Frontend
          </span>
          <h2 className="select-none text-5xl xl:text-5xl align-text-top mt-2 xl:m-0 mb-6 text-dark-primary dark:text-light-primary font-header font-bold ">
            Hei! Mitt navn er
            <br />
            <span className=" text-dark-accent font-header  ">Stein</span>
          </h2>
          <p className="font-body max-w-[500px] text-base lg:text-lg font-semibold  text-dark-primary dark:text-light-primary mb-10">
            Jeg er en aspirerende frontendutvikler, som liker å lage flotte
            nettopplevelser ved hjelp av mine kunnskaper innen faget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
