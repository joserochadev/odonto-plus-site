import Container from "@/components/container";
import "@/styles/cards.css";
import TipsImage from "@/app/assets/img-tips.jpg";
import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import "@/styles/containers.css";

const TipsContainer = () => {
  const tips = [
    {
      image: TipsImage,
      title: "Exames em dia!",
      description:
        "A prevenção é a melhor forma de cuidar da sua saúde. Agende check-ups regularmente.",
    },
    {
      image: TipsImage,
      title: "Hidrate-se bem",
      description:
        "Beber água suficiente todos os dias melhora a digestão, a circulação e a disposição.",
    },
    {
      image: TipsImage,
      title: "Priorize seu bem-estar!",
      description:
        "Cuide da sua mente como cuida do corpo. Descansar é essencial.",
    },
  ];

  return (
    <section className="main-container tips-container">
      <Container className="">
        <div className="tips-content">
          <h5>DICAS</h5>
          <h2>
            Confira dicas exclusivas para viver com mais bem-estar e qualidade
            de vida.
          </h2>

          <div className="card">
            {tips.map((objects, index) => (
              <div key={index} className="tips-card">
                <Image src={objects.image} alt="tips-img" />

                <div className="tips-text">
                  <h3>{objects.title}</h3>
                  <p>{objects.description}</p>

                  <PrimaryButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TipsContainer;
