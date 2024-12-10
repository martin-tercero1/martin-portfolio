interface FooterProps {
  title: String;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer
      className="flex flex-col gap-12 items-center font-extralight text-[1.6rem] mb-24 text-secondary-one mt-32"
      id="contact"
    >
      <div className="flex justify-around w-[300px]">
        <a href="mailto:martintercero20@hotmail.com">
          <figure className="flex flex-col items-center">
            <img src="./icons/gmail.svg" alt="" />
            <figcaption className="text-secondary-one hover:text-primary-one">
              EMAIL
            </figcaption>
          </figure>
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/martin-tercero/">
          <figure className="flex flex-col items-center">
            <img src="./icons/linkedin.svg" alt="" />
            <figcaption className="text-secondary-one hover:text-primary-one">
              LINKEDIN
            </figcaption>
          </figure>
        </a>

        <a target="_blank" href="https://github.com/martin-tercero1">
          <figure className="flex flex-col items-center">
            <img src="./icons/footer-github.svg" alt="" />
            <figcaption className="text-secondary-one hover:text-primary-one">
              GITHUB
            </figcaption>
          </figure>
        </a>
      </div>
      <ul className="flex justify-evenly mx-0 w-[300px]">
        <li>
          <a
            className="hover:text-primary-one text-secondary-one"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary-one text-secondary-one"
            href="#about"
          >
            About
          </a>
        </li>
      </ul>
      <p className="text-[1.5rem]">Software Developer in progress</p>
    </footer>
  );
};

export default Footer;
