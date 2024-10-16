const About = () => {
  return (
    <section
      id="about"
      className="font-body py-20 min-h-screen flex flex-col justify-center transition-all duration-500"
    >
      {/* Innhold */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 lg:px-12">
        <h2 className="font-header h2 mb-6 text-light-textPrimary dark:text-dark-textPrimary">
          lorem
        </h2>
        <p className=" text-lg lg:text-xl text-light-textSecondary dark:text-dark-textSecondary mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          expedita.
        </p>
        <p className="screen- lg:text-xl text-light-textSecondary dark:text-dark-textSecondary mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, iste
          necessitatibus placeat esse inventore quos.
        </p>
      </div>
    </section>
  );
};

export default About;
