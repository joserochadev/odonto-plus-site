import Container from "@/components/container";
import "@/styles/projects.css";
import img1 from "@/app/assets/projects/pro1.jpg";
import img2 from "@/app/assets/projects/pro2.jpg";
import img3 from "@/app/assets/projects/pro3.jpg";
import Image from "next/image";

const futureProjects = [
  {
    title: "Expansão para Novas Localizações",
    description:
      "Estamos planejando expandir nossas unidades para outras regiões, proporcionando mais acessibilidade aos nossos pacientes.",
    image: img1,
  },
  {
    title: "Tecnologia de Diagnóstico Avançada",
    description:
      "Em breve, implementaremos sistemas de diagnóstico por IA que ajudarão a detectar problemas dentários de forma mais eficiente e precisa.",
    image: img2,
  },
  {
    title: "Aprimoramento do Atendimento ao Cliente",
    description:
      "Estamos criando uma plataforma digital para facilitar o agendamento de consultas, além de oferecer acompanhamento personalizado para nossos pacientes.",
    image: img3,
  },
];

export default function FutureProjectsPage() {
  return (
    <section className="projects-section">
      <div className="projects-header">
        <Container>
          <header className="header">
            <h2 className="header-title">Futuros Projetos</h2>
            <p className="header-description">
              Veja o que estamos planejando para o futuro da nossa clínica
              odontológica.
            </p>
          </header>
        </Container>
      </div>

      <section className="projects-container">
        <Container>
          <div className="cards">
            {futureProjects.map((project, index) => (
              <div key={index} className="project-card">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  width={50}
                />
                <div className="text-card">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
}
