interface SkillsProps {
  title: String;
}

const Skills: React.FC<SkillsProps> = ({ title }) => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="text-[2.1rem] font-semibold tracking-[1px] leading-[26px] mb-[28px] text-secondary-one">
        Technologies that I've worked with
      </h2>
      <div className="flex gap-1 flex-nowrap md:flex-wrap md:items-center md:justify-evenly overflow-x-scroll">
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img className="w-full h-[120px]" src="./skills/next.svg" alt="Next Logo" />
          <figcaption className="text-lg">Next</figcaption>
        </figure>
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img className="w-full h-[120px]" src="./skills/react.svg" alt="React Logo" />
          <figcaption className="text-lg">React</figcaption>
        </figure>
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img
            className="w-full h-[120px]"
            src="./skills/tailwind.svg"
            alt="Tailwind Logo"
          />
          <figcaption className="text-lg">Tailwind</figcaption>
        </figure>
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img className="w-full h-[120px]" src="./skills/express.svg" alt="Express Logo" />
          <figcaption className="text-lg">Express</figcaption>
        </figure>
        <figure className="w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img
            className="w-full h-[120px]"
            src="./skills/node.svg"
            alt="Node Logo"
          />
          <figcaption className="text-lg">Node</figcaption>
        </figure>
      </div>
      <div className="flex gap-1 flex-nowrap md:flex-wrap md:items-center md:justify-evenly  overflow-x-scroll">
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img className="w-full h-[120px]" src="./skills/html.svg" alt="HTML Logo" />
          <figcaption className="text-lg">HTML</figcaption>
        </figure>
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img className="w-full h-[120px]" src="./skills/css.svg" alt="CSS Logo" />
          <figcaption className="text-lg">CSS</figcaption>
        </figure>
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img
            className="w-full h-[120px]"
            src="./skills/javascript.svg"
            alt="JavaScript Logo"
          />
          <figcaption className="text-lg">JavaScript</figcaption>
        </figure>
        <figure className="flex-none w-[80px] md:w-[150px] text-[1.8rem] text-center tracking-[1.5px]">
          <img
            className="w-full h-[120px]"
            src="./skills/wordpress.svg"
            alt="WordPress Logo"
          />
          <figcaption className="text-lg">WordPress</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Skills;
