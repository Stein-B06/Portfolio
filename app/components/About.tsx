import { motion } from "framer-motion";
import React from "react";
import {
  FaGithub,
  FaHtml5,
  FaReact,
  FaJsSquare,
  FaCss3Alt,
} from "react-icons/fa"; // Importerer ikoner for Github, HTML, React, JavaScript & CSS.
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"; // Importerer ikoner for MUI, Next.JS, Tailwind & TypeScript.

// Definerer TypeScript interface for ikoner.
interface IconItem {
  component: React.ElementType;
  className: string;
  text: string;
}

// Array med objekter for ikoner med tilsvarende  classnames.
const icons: IconItem[] = [
  {
    component: FaJsSquare,
    className: "text-yellow-400 text-3xl",
    text: "Javascript",
  },
  {
    component: SiTypescript,
    className: "text-blue-400 text-3xl",
    text: "Typescript",
  },
  {
    component: FaReact,
    className: "text-blue-400 text-3xl",
    text: "React",
  },
  {
    component: SiTailwindcss,
    className: "text-teal-400 text-3xl",
    text: "Tailwind",
  },
  {
    component: FaCss3Alt,
    className: "text-blue-400 text-3xl",
    text: "CSS",
  },
  {
    component: FaGithub,
    className: "text-gray-200 text-3xl",
    text: "Github",
  },
  { component: FaHtml5, className: "text-red-400 text-3xl", text: "HTML" },
  {
    component: SiNextdotjs,
    className: "text-black bg-white rounded-sm text-3xl",
    text: "NEXT.JS",
  },
];

// Classname for li elementet.
const divLiClassName =
  "flex items-center w-full  space-x-2 pr-5 bg-dark-primary font-semibold text-base md:text-lg lg:text-xl bg-dark-primary text-light-primary dark:bg-dark-primary border dark:text-light-primary  p-2 rounded-md";

// li animasjon
const liVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05, // økende forsinkelse basert på index
      duration: 0.3,
    },
  }),
};

// Splitter ikonene og listclasses arrays i to halvdeler
const midIndex = Math.ceil(icons.length / 2);
const firstHalfIcons = icons.slice(0, midIndex);
const secondHalfIcons = icons.slice(midIndex);

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="px-6 py-40 h-full flex justify-center items-center "
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-dark-primary dark:text-light-primary text-2xl md:text-3xl lg:text-4xl font-bold font-header mb-8 select-none">
          OM MEG
        </h2>
        <div>
          <p className="text-dark-primary dark:text-light-primary  font-body text-base lg:text-lg text-left  mb-6  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            laboriosam? Quas, itaque incidunt. Distinctio blanditiis odio
            dolorum quasi labore praesentium ab obcaecati quis vitae iusto
            voluptate exercitationem, eveniet rem accusamus amet tempore ipsum
            inventore minus quam beatae nam consectetur. Ipsum ab iste quasi
            voluptatem similique magni inventore ducimus et voluptates?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            doloremque sunt saepe harum accusamus rerum.
          </p>
        </div>
        <div>
          <p className="text-lg md:text-xl lg:text-2xl select-none mt-16 md:mt-28">
            Ferdigheter:
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 select-none ">
          <ul className="space-y-3 flex flex-col  cursor-default font-body  w-auto md:w-full">
            <div className="flex flex-col md:flex-row space-y-4  md:space-y-0 md:space-x-4 mb-1 md:mb-1 ">
              {firstHalfIcons.map(
                ({ component: IconComponent, className, text }, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView="visible"
                    variants={liVariants}
                    viewport={{ once: true, amount: 0.8 }}
                    className={divLiClassName}
                  >
                    <IconComponent className={className} />
                    <span className="ml-2">{text}</span>
                    {/* render text fra ikonene */}
                  </motion.li>
                )
              )}
            </div>
            <div className=" h-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4   ">
              {secondHalfIcons.map(
                ({ component: IconComponent, className, text }, index) => (
                  <motion.li
                    key={midIndex + index} // Sikrer unike nøkler på tvers av divs.
                    custom={midIndex + index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView="visible"
                    variants={liVariants}
                    viewport={{ once: true, amount: 0.5 }}
                    className={divLiClassName}
                  >
                    <IconComponent className={className} />
                    <span className="ml-2">{text}</span>
                  </motion.li>
                )
              )}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
