import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Proffsnapper",
    description:
      "Et prosjekt jeg var design og frontend ansvarlig for i forbindelse med tracking av regnskapstall til bedriften sine kunder. Her utviklet vi et system for håndtering av informasjon rundt tidligere startups og bedrifter tilknyttet VIS Innovasjon. ",
    imageUrl: "/Images/vispro.png",
    liveLink: "",
    codeLink: "",
    technologies: ["React", "Typescript", "MUI", "Tailwind CSS"],
  },

  {
    title: "Golfshot Counter",
    description:
      "Siden jeg spiller golf, lagde jeg dette prosjektet. Kan brukes på golfbanen for å holde kontroll på antall golfslag i løpet av golfrunden.",
    imageUrl: "/Images/GCapp.png",
    liveLink: "",
    codeLink: "",
    technologies: ["React", "HTMl", "CSS", "Javascript"],
  },
  {
    title: "Project three",
    description:
      "A description of Project One that explains its features and purpose.",
    imageUrl: "/Images/bgImage.png",
    liveLink: "",
    codeLink: "",
    technologies: ["React", "Typescript", "Tailwind CSS"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 py-32 my-32  h-full ">
      <div className="container mx-auto px-4">
        <h2 className="font-body text-2xl md:text-3xl lg:text-4xl font-bold text-light-secondary dark:text-dark-secondary mb-8 text-center">
          NOEN AV MINE PROSJEKTER
        </h2>

        {/* Prosjekt kort */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveLink={project.liveLink}
              codeLink={project.codeLink}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
