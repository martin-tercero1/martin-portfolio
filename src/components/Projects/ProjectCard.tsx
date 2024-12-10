interface ProjectCardProps {
  title: string,
  image: string,
  description: string,
  sourceCode: string,
  liveDemo: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, description, sourceCode, liveDemo }) => {
  return (
        <article className="w-[272px] md:min-w-[272px] md:max-w-[max-content] min-h-[450px] max-h-[490px] bg-[#222525] rounded-md project-card">
          <img
            className="w-full rounded-t-[8px]"
            src={image}
            loading="lazy"
            alt=""
          />
          <h3 className="text-4xl tracking-[2.5px] font-normal text-center m-1">{title}</h3>
          <p className="text-2xl my-[10px] mx-[20px]">
            {description}
          </p>
          <div className="flex justify-center project-button-container">
            <a
              className="ml-4 p-3"
              href={sourceCode}
              target="_blank"
            >
              <button>
                <img
                  className="card-github-logo"
                  src="./icons/github.svg"
                  alt="github-logo"
                />
              </button>
            </a>
            <a
              href={liveDemo}
              target="_blank"
            >
              <button>
                <img
                  className="card-link-logo"
                  src="./icons/external-link.svg"
                  alt="external-link-logo"
                />
              </button>
            </a>
          </div>
        </article>
  );
};

export default ProjectCard;