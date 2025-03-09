import "@/styles/tips.css";
import Img from "@/app/assets/img-tips.jpg"; // Certifique-se de que o caminho da imagem está correto
import Container from "@/components/container";
import Image from "next/image";

const TipsPage = () => {
  const tips = [
    {
      title: "Como manter uma boa saúde bucal",
      description:
        "Dicas simples para cuidar dos dentes no dia a dia e evitar problemas dentários.",
      imageUrl: Img, // Caminho da imagem
    },
    {
      title: "Alimentação e saúde dental",
      description:
        "Saiba como a alimentação impacta a saúde dos seus dentes e gengivas.",
      imageUrl: Img, // Caminho da imagem
    },
    {
      title: "Importância do uso do fio dental",
      description:
        "Entenda a importância do fio dental para a prevenção de cáries e doenças gengivais.",
      imageUrl: Img, // Caminho da imagem
    },
  ];

  return (
    <div className="tips-page">
      <section className="hero-section">
        <Container>
          <div className="hero-section-content max-w-4xl mx-auto">
            <h2 className="hero-section-title">
              Dicas para te ajudar a turbinar a sua saúde.
            </h2>
            <p className="hero-section-description">
              Aprenda com nossas dicas simples e eficazes para manter sua saúde
              em dia.
            </p>
          </div>
        </Container>
      </section>
      <Container>
        {/* Capa do Blog */}

        {/* Cards das Dicas */}
        <section className="card-container">
          <div className="card-grid">
            {tips.map((tip, index) => (
              <div className="card" key={index}>
                <Image
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="card-image"
                  width={400} // Defina uma largura
                  height={250} // Defina uma altura
                  objectFit="cover" // Para garantir que a imagem cubra o espaço sem distorcer
                />
                <div className="tips-text">
                  <h3 className="card-title">{tip.title}</h3>
                  <p className="card-description">{tip.description}</p>
                  <a href="/" className="card-link">
                    Leia mais
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default TipsPage;
