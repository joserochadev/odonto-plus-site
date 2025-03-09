import Container from "@/components/container";
import "@/styles/partners.css"; // Importando o arquivo CSS com @apply

const partners = [
  {
    name: "Clínica OdontoCare",
    logo: "https://th.bing.com/th/id/OIP.SsH4zNJlA8Uft7i8ZwAXTgHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
    description: "Especializada em tratamentos dentários de alta qualidade.",
  },
  {
    name: "DentalTech",
    logo: "https://i.pinimg.com/originals/d2/db/b3/d2dbb3b74657c9d32250af7bf74f6801.jpg",
    description: "Tecnologia de ponta para exames e diagnósticos rápidos.",
  },
  {
    name: "Sorriso Feliz",
    logo: "https://th.bing.com/th/id/OIP.1x6tqiQK7FaDDyff2Yrf-wHaHa?rs=1&pid=ImgDetMain",
    description: "Compromisso com a saúde bucal e o bem-estar dos pacientes.",
  },
];

export default function PartnersPage() {
  return (
    <div className="partners-page">
      <header className="partners-header">
        <Container>
          <div className="partners-text">
            <h2>Nossos Parceiros</h2>
            <p>
              Temos orgulho de trabalhar com empresas que compartilham nosso
              compromisso com a saúde e o bem-estar.
            </p>
          </div>
        </Container>
      </header>

      <Container>
        <section className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-container">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
}
