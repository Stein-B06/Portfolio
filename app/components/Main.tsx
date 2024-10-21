import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <section id="main" className="h-screen pt-32 xl:mb-8">
      <div className=" ">
        <div className="flex flex-col-reverse  xl:flex-row-reverse  items-center justify-around xl:pt-8 transition-all duration-300  ">
          <div className="  text-center xl:text-left xl:mr-24 mt-5  ">
            <span className="text-lg font-code">Junior Frontend</span>
            <h2 className=" text-5xl xl:text-6xl align-text-top mt-2 xl:m-0 mb-6 text-light-textPrimary dark:text-dark-textPrimary font-header font-bold ">
              Hei! Mitt navn er
              <br />
              <span className=" text-light-accent dark:text-dark-ekstra  ">
                Stein
              </span>
            </h2>
            <p className=" max-w-[500px] text-lg lg:text-xl text-light-textSecondary dark:text-white mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              doloremque sequi magnam ex praesentium eum!
            </p>
          </div>
          <div className="w-full h-full xl:w-1/3 flex justify-center">
            <div className=" w-[300px] h-[300px]   xl:w-[385px] xl:h-[385px] relative ">
              <div
                className={` rounded-full w-72 h-72 relative  xl:h-96 xl:w-96  ${
                  isDarkMode ? "dark-gradient" : "light-gradient"
                }`}
              >
                <Image
                  src="/Images/Randomport.jpg"
                  alt="Profilbilde"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
