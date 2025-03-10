import Container from "@/components/container";
import "@/styles/cards.css";
import PrimaryButton from "@/components/primaryButton";
import "@/styles/containers.css";

const TipsContainer = () => {
  const tips = [
    {
      image:
        "https://lh6.googleusercontent.com/bZCwQz6f5avCmWjPhjT1ouXeVZaQo5Gl_-rutnNqDinbuXCE7GoNgcdmu4bD0Nxp2bPRRvrih-pHdYAHKxF4cVpIHD9dzP442su4mOPpzzvIvZaeBgbC9YDkGmwC3J2e5mTFcplD",
      title: "Exames em dia!",
      description:
        "A prevenção é a melhor forma de cuidar da sua saúde. Agende check-ups regularmente.",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.AVzQpsdaE5SL3cZBA3rxkgHaE8?rs=1&pid=ImgDetMain",
      title: "Hidrate-se bem",
      description:
        "Beber água suficiente todos os dias melhora a digestão, a circulação e a disposição.",
    },
    {
      image:
        "https://th.bing.com/th/id/R.455812a8165712df1547f6ec9af8e617?rik=hL1OWVZ6sDB2mA&pid=ImgRaw&r=0",
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
            Confira dicas exclusivas para ter mais bem-estar e qualidade de
            vida.
          </h2>

          <div className="card">
            {tips.map((objects, index) => (
              <div key={index} className="tips-card">
                <img
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
