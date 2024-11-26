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
      className="relative max-w-lg  rounded-xl bg-gradient-to-tr from-light-accent/100 via-light-accent/100 to-dark-accent/100 sm:to-dark-accent/30
    dark:from-dark-primary/100 dark:via-dark-primary/100 dark:to-dark-primary/100 sm:dark:to-dark-primary/10
      border-light-primary/100 border dark:border-dark-secondary/20   hover:bg-dark-accent/100 hover:shadow-md hover:dark:bg-dark-primary/100    hover:dark:border-light-primary/100  hover:border-light-accent  transition-all ease-in duration-300    "
    >
      <div className="flex flex-col items-center  ">
        <div className="flex flex-col  p-4 space-y-2 md:space-y-4 ">
          <h2 className="text-2xl font-semibold text-dark-primary font-header dark:text-light-primary">
            {title}
          </h2>
          <p className="font-body font-semibold py-2   min-h-24 max-w-md  text-sm md:text-base text-gray-700 dark:text-light-primary">
            {description}
          </p>

          <div className=" flex flex-wrap  gap-2 ">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs font-semibold text-light-primary  bg-dark-primary  dark:bg-light-accent dark:text-dark-primary  px-2 py-1 rounded-md"
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
              className="font-bold p-2 rounded-lg text-dark-primary dark:text-light-primary hover:bg-dark-primary/50 hover:text-light-primary hover:dark:bg-dark-accent/50 "
            >
              Live Demo
            </a>
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold p-2 rounded-lg text-dark-primary dark:text-light-primary hover:bg-dark-primary/50 hover:text-light-primary hover:dark:bg-dark-accent/50   "
            >
              Github
            </a>
          </div>
        </div>
        <div className="p-2 flex  select-none">
          <Image
            draggable="false"
            src={imageUrl}
            alt={title}
            fill
            className="rounded-xl -z-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
