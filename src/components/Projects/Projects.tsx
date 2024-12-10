
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: {
    id: string;
    data: {
      title: string;
      image: string;
      description: string;
      sourceCode: string;
      liveDemo: string;
      order: number;
    };
  }[];
}

const Projects: React.FC<ProjectsProps> = ({projects}) => {
      return (
        <>
          <h2
            className="text-4xl projects-title text-secondary-one"
            id="projects"
          >
            My projects <br />
            <span className="text-2xl font-extralight projects-subtitle text-primary-white">
              You can check my code or view the live version of each project
            </span>
          </h2>
          <section className="grid grid-cols-auto-fit-300 gap-8 items-center projects-section mt-3">
            {projects.sort((a, b) => (a.data.order > b.data.order ? 1 : b.data.order > a.data.order ? -1 : 0)).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.data.title}
                image={project.data.image}
                description={project.data.description}
                sourceCode={project.data.sourceCode}
                liveDemo={project.data.liveDemo}
              />
            ))}
          </section>
        </>
      );
}

export default Projects;