import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import Image01 from "@/app/assets/project-01.jpg";
import Image02 from "@/app/assets/project-02.jpg";
import "@/styles/containers.css";

const projectData = [
  {
    title: "Campanhas de prevenção e conscientização",
    description:
      "Realizar campanhas educativas sobre doenças como diabetes, hipertensão, câncer, HIV, entre outras, com palestras, distribuição de material informativo e exames preventivos gratuitos.",
    image: Image01,
  },
  {
    title: "Oficinas de nutrição e alimentação saudável",
    description:
      "Oferecer workshops sobre como melhorar a alimentação, focando em dietas balanceadas, receitas saudáveis e prevenção de doenças relacionadas à alimentação inadequada.",
    image: Image02,
  },
];

const ProjectsContainer = () => {
  return (
    <section className="main-container">
      <div className="projects-container">
        <h4>PROJETOS SOCIAIS</h4>
        <h2>Juntos pela saúde e bem-estar da nossa comunidade!</h2>
        <div className="projects-list">
          {projectData.map((project, index) => (
            <div key={index} className="project">
              {index % 2 === 0 ? (
                <>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <PrimaryButton />
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="img-project"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="img-project"
                  />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <PrimaryButton />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
