import Container from "@/components/container";
import "@/styles/partners.css";
import img1 from "@/app/assets/partners/part01.jpg";
import img2 from "@/app/assets/partners/part02.jpg";
import img3 from "@/app/assets/partners/part03.jpg";
import Image from "next/image";

const partners = [
  {
    name: "Clínica OdontoCare",
    logo: img1,
    description: "Especializada em tratamentos dentários de alta qualidade.",
  },
  {
    name: "DentalTech",
    logo: img2,
    description: "Tecnologia de ponta para exames e diagnósticos rápidos.",
  },
  {
    name: "Sorriso Feliz",
    logo: img3,
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
                <Image
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
