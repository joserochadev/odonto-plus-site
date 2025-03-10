import Container from "@/components/container";
import "@/styles/projects.css";

const futureProjects = [
  {
    title: "Expansão para Novas Localizações",
    description:
      "Estamos planejando expandir nossas unidades para outras regiões, proporcionando mais acessibilidade aos nossos pacientes.",
    image:
      "https://geofusion.com.br/wp-content/uploads/2021/01/desafio-expansao-varejo-min-e1612204713683.jpg",
  },
  {
    title: "Tecnologia de Diagnóstico Avançada",
    description:
      "Em breve, implementaremos sistemas de diagnóstico por IA que ajudarão a detectar problemas dentários de forma mais eficiente e precisa.",
    image:
      "https://img.freepik.com/fotos-premium/maquina-avanzada-diagnostico-medico-resonancia-magnetica-o-tomografia-computarizada-hospital-ia-generativa_1000174-2194.jpg?w=740",
  },
  {
    title: "Sustentabilidade e Eco-Friendly",
    description:
      "A sustentabilidade é uma prioridade para nós. Estamos desenvolvendo projetos para tornar nossa clínica mais ecológica, utilizando energia solar e materiais recicláveis.",
    image:
      "https://evologistica.com.br/wp-content/uploads/2024/06/sustentabilidade.jpg",
  },
  {
    title: "Aprimoramento do Atendimento ao Cliente",
    description:
      "Estamos criando uma plataforma digital para facilitar o agendamento de consultas, além de oferecer acompanhamento personalizado para nossos pacientes.",
    image:
      "https://img.freepik.com/premium-photo/futuristic-robot-artificial-intelligence-revolutionary-ai-technology-concept_31965-37350.jpg",
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
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
