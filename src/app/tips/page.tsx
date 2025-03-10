import "@/styles/tips.css";
import Container from "@/components/container";

const TipsPage = () => {
  const tips = [
    {
      title: "Como manter uma boa saúde bocal",
      description:
        "Dicas simples para cuidar dos dentes no dia a dia e evitar problemas dentários.",
      imageUrl:
        "https://th.bing.com/th/id/R.ea89b4f9051735fdd64a3022d9cd9feb?rik=J7yO3Rk7gX21kA&pid=ImgRaw&r=0", // Caminho da imagem
    },
    {
      title: "Alimentação e saúde dental",
      description:
        "Saiba como a alimentação impacta a saúde dos seus dentes e gengivas.",
      imageUrl:
        "https://media.starlightcms.io/workspaces/pague-menos/portal-sempre-bem/original/saude-bucal-8-vfzefw77pd.jpeg", // Caminho da imagem
    },
    {
      title: "Importância do uso do fio dental",
      description:
        "Entenda a importância do fio dental para a prevenção de cáries e doenças gengivais.",
      imageUrl:
        "https://www.revistasuplementacao.com.br/_client/materia/5b21301964d49.jpg", // Caminho da imagem
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
              <img
                src={tip.imageUrl}
                alt={tip.title}
                className="card-image"
                width={400}
                height={250}
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
        </section>
      </Container>
    </div>
  );
};

export default TipsPage;
