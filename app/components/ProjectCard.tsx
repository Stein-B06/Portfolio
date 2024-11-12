import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  codeLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveLink,
  codeLink,
  technologies,
}) => {
  return (
    <div
      className="max-w-lg md:max-w-3xl  rounded-xl bg-gradient-to-tr from-dark-primary/40 via-light-accent/100 to-dark-accent/30 
    dark:from-dark-accent/100 dark:via-dark-primary/100 dark:to-dark-primary/60 
      border-light-primary/100 border dark:border-dark-secondary/20  dark:bg-dark-secondary/10 hover:bg-dark-primary/80 hover:dark:bg-dark-secondary/100    hover:dark:border-light-primary/100  border-light-primary  transition-all ease-in duration-200    "
    >
      <div className="absolute inset-0 z-10  rounded-xl"></div>

      <div className="flex flex-col xl:flex-row items-center xl:items-start  ">
        <div className="flex flex-col  p-4 space-y-2 md:space-y-4 w-full">
          <h2 className="text-2xl font-semibold text-dark-primary font-header dark:text-light-primary">
            {title}
          </h2>
          <p className="font-body min-h-20 md:min-h-32  text-sm text-gray-700 dark:text-light-primary">
            {description}
          </p>

          <div className=" flex flex-wrap items-end gap-2 ">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-semibold text-light-primary  bg-dark-accent  dark:bg-dark-primary  px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className=" font-body flex gap-2">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold p-2 rounded-lg text-dark-primary dark:text-light-primary hover:bg-dark-primary/50 hover:text-light-primary hover:dark:bg-dark-accent "
            >
              Live Demo
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold p-2 rounded-lg text-dark-primary dark:text-light-primary hover:bg-dark-primary/50 hover:text-light-primary hover:dark:bg-dark-accent   "
            >
              Github
            </a>
          </div>
        </div>
        <div className="p-4  w-36 hidden xl:flex h-32 select-none">
          <Image
            draggable="false"
            src={imageUrl}
            alt={title}
            width={200}
            height={200}
            className="rounded-lg  "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
