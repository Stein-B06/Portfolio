// Contact.tsx
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="pb-10">
      <div className="md:hidden flex flex-col items-center mb-4">
        <p className="text-center text-lg font-semibold">Kontakt meg</p>
      </div>

      {/* Ikoner plassert rett på md+-skjermer, horisontalt justert nederst på mindre skjermer */}
      <div
        className=" 
          md:fixed md:right-3 md:top-1/2 md:transform md:-translate-y-1/2 
          flex md:flex-col md:space-y-4 space-x-4 justify-center
          md:space-x-0 py-2 px-1 rounded-lg w-full md:w-auto
           z-50
        "
      >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border-2 border-light-accent rounded-full bg-light-secondary text-light-primary  transition-all duration-300 hover:bg-dark-primary/80 dark:hover:bg-dark-accent/10 hover:scale-110"
        >
          <FaGithub className="text-2xl" />
        </a>

        <a
          href="mailto:"
          className="w-10 h-10 flex items-center justify-center border-2 border-light-accent rounded-full bg-light-secondary text-light-primary  transition-all duration-300 hover:bg-dark-primary/80 dark:hover:bg-dark-accent/10  hover:scale-110"
        >
          <FaEnvelope className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
