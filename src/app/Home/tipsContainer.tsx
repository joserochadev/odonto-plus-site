import Container from "@/components/container";
import "@/styles/cards.css";
import PrimaryButton from "@/components/primaryButton";
import "@/styles/containers.css";
import img1 from "@/app/assets/tips/tips-img01.jpg";
import img2 from "@/app/assets/tips/tips-img02.jpeg";
import img3 from "@/app/assets/tips/tips-img03.jpg";
import Image from "next/image";

const TipsContainer = () => {
  const tips = [
    {
      title: "Como manter uma boa saúde bocal",
      description:
        "Dicas simples para cuidar dos dentes no dia a dia e evitar problemas dentários.",
      image: img1, // Caminho da imagem
    },
    {
      title: "Alimentação e saúde dental",
      description:
        "Saiba como a alimentação impacta a saúde dos seus dentes e gengivas.",
      image: img2, // Caminho da imagem
    },
    {
      title: "Importância do uso do fio dental",
      description:
        "Entenda a importância do fio dental para a prevenção de cáries e doenças gengivais.",
      image: img3, // Caminho da imagem
    },
  ];
  return (
    <section className="main-container tips-container">
      <Container className="">
        <div className="tips-content">
          <h5>DICAS</h5>
          <h2>
            Confira dicas exclusivas para ter mais bem-estar e qualidade de
            vida.
          </h2>

          <div className="card">
            {tips.map((objects, index) => (
              <div key={index} className="tips-card">
                <Image
                  src={objects.image}
                  alt="tips-img"
                  width={300}
                  height={200}
                  className="tips-img"
                />

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
