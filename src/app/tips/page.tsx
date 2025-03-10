import "@/styles/tips.css";
import img1 from "@/app/assets/tips/tips-img01.jpg";
import img2 from "@/app/assets/tips/tips-img02.jpeg";
import img3 from "@/app/assets/tips/tips-img03.jpg";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

const TipsPage = () => {
  const tips = [
    {
      title: "Como manter uma boa saúde bocal",
      description:
        "Dicas simples para cuidar dos dentes no dia a dia e evitar problemas dentários.",
      imageUrl: img1, // Caminho da imagem
    },
    {
      title: "Alimentação e saúde dental",
      description:
        "Saiba como a alimentação impacta a saúde dos seus dentes e gengivas.",
      imageUrl: img2, // Caminho da imagem
    },
    {
      title: "Importância do uso do fio dental",
      description:
        "Entenda a importância do fio dental para a prevenção de cáries e doenças gengivais.",
      imageUrl: img3, // Caminho da imagem
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
        {/* Cards das Dicas */}
        <section className="card-container">
          {tips.map((tip, index) => (
            <div className="card-tips" key={index}>
              <Image
                src={tip.imageUrl}
                alt={tip.title}
                className="card-image"
                width={400}
                height={250}
              />
              <div className="tips-text">
                <h3 className="card-title">{tip.title}</h3>
                <p className="card-description">{tip.description}</p>
                <Link href="/">Leia mais</Link>
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default TipsPage;
