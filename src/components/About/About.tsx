interface AboutProps {
  title: String;
}

const About: React.FC<AboutProps> = ({ title }) => {
  return (
    <section className="max-w-[865px] about-section mt-4" id="about">
      <div className="flex items-center justify-between max-w-[900px] flex-wrap about-container">
        <div className="flex w-[525px] gap-4 justify-between items-center about-description-container">
          <div className="w-[7px] h-[116px] bg-gradient-to-b from-primary-one to-[#00d9f5] about-line"></div>
          <div>
            <h2 className="text-4xl tracking-[1px] about-title text-secondary-one">
              About me
            </h2>
          <p className="text-[1.6rem] max-w-[500px] leading-7 about-description mt-4">
            I graduated from Harding University with a Bachelor's in Computer Science and
            a Master's in Information System. My hobbies are playing videogames and soccer. I live in
            Nicaragua 🇳🇮 and I am looking for new projects and opportunities. I like constantly learn new things. I am also a Computer Science teacher at St. Augustine Prep School.
          </p>
          </div>
        </div>

        <div className="w-[300px] img-section">
          <img
            className="w-full"
            src="./blob.svg"
            loading="lazy"
            alt="Martin Tercero Picture"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
