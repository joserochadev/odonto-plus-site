import Container from "@/components/container";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/styles/containers.css";
import "@/styles/cards.css";

const ServiceContainer = () => {
  const contentGrid = [
    {
      image: "",
      titulo: "Problemas Digestivos",
      descricao:
        "Desconfortos como inchaço e azia podem ser aliviados com hábitos saudáveis e acompanhamento médico.",
    },
    {
      image: "",
      titulo: "Saúde Hormonal",
      descricao:
        "O equilíbrio hormonal é essencial para o metabolismo e bem-estar, exigindo atenção especializada.",
    },
    {
      image: "",
      titulo: "Bem-estar Mental",
      descricao:
        "Cuidar da saúde mental melhora a qualidade de vida, ajudando a lidar com ansiedade e estresse.",
    },
    {
      image: "",
      titulo: "Cuidados Pediátricos",
      descricao:
        "A saúde infantil exige prevenção e acompanhamento para um crescimento equilibrado e seguro.",
    },
    {
      image: "",
      titulo: "Autoimune e Inflamação",
      descricao:
        "Doenças autoimunes causam inflamação e exigem controle para minimizar impactos no dia a dia.",
    },
    {
      image: "",
      titulo: "Saúde do Coração",
      descricao:
        "Bons hábitos e monitoramento médico reduzem o risco de doenças cardiovasculares.",
    },
  ];

  return (
    <section className="main-container services-container">
      <Container>
        <div className="content services-content">
          <p>SERVIÇOS</p>
          <h2>Como podemos ajudá-lo a se sentir melhor?</h2>

          <div className="card">
            {contentGrid.map((service, index) => (
              <div key={index} className="card-service">
                <div className="p-10">
                  <h3>{service.titulo}</h3>
                  <p>{service.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceContainer;
