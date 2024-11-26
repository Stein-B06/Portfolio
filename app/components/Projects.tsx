import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "Proffsnapper",
    description:
      "Et prosjekt jeg var design og frontend ansvarlig for i forbindelse med tracking av regnskapstall til bedriften sine kunder. Her utviklet vi et system for håndtering av informasjon rundt tidligere startups og bedrifter tilknyttet VIS Innovasjon. ",
    imageUrl: "/Images/vispro.png",
    liveLink:
      "https://visproffsnapper-f8g5e8azb7g6bdh7.norwayeast-01.azurewebsites.net/",
    codeLink: "https://github.com/VISInnovasjon/BT-Proffsnapper-Frontend",
    technologies: ["React", "Typescript", "MUI", "Tailwind CSS"],
  },

  {
    title: "Pawtopia Planet",
    description:
      "Mitt første prosjekt i Next.JS. På nettsiden kan man søke etter hunderaser, se bilder og hundefakta. Jeg lagde det i Next.js med TypeScript og Tailwind CSS som henter og viser dynamiske data fra en ekstern API ved hjelp av Fetch API, med responsivt design.",
    imageUrl: "/Images/PPimg.png",
    liveLink: "https://pawtopia-planet.vercel.app/",
    codeLink: "https://github.com/Stein-B06/doglens",
    technologies: ["Typescript", "Next.JS", "Tailwind", "MUI", "CSS"],
  },
  {
    title: "Golfshot Counter",
    description:
      "Siden jeg spiller golf, lagde jeg dette prosjektet. Kan brukes på golfbanen for å holde kontroll på antall golfslag i løpet av golfrunden.",
    imageUrl: "/Images/GCapp.png",
    liveLink: "https://stein-b06.github.io/Golfshot-counter",
    codeLink: "https://github.com/Stein-B06/Golfshot-counter",
    technologies: ["React", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Luna Link",
    description:
      "Et lærerikt gruppeprosjekt jeg var prosjektleder for. Prosjektet var gøyt å jobbe med og ga god trening i forhold til samarbeid, koding og det å være prosjektleder.",
    imageUrl: "/Images/LLapp.png",
    liveLink: "https://lunalink.netlify.app/",
    codeLink: "https://github.com/Stein-B06/Luna-Link-own",
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-2  py-20 md:py-36 pt-20  h-full  ">
      <div className="container mx-auto px-4">
        <h2 className="font-header text-2xl md:text-3xl lg:text-4xl font-bold text-light-secondary dark:text-dark-secondary mb-8 text-center">
          NOEN AV MINE PROSJEKTER
        </h2>

        {/* Prosjekt kort */}
        <div className="flex flex-wrap gap-8 justify-center">
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
