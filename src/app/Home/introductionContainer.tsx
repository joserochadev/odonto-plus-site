import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import banner from "@/app/assets/banner-01.svg";
import "@/styles/containers.css";
import Container from "@/components/container";

export default function IntroductionContainer() {
  return (
    <section className="main-container introduction-container">
      <Container className="">
        <div className="content introduction-content">
          <div className="content">
            <p>BOAS-VINDAS A DOCTORCARE 👋</p>
            <h1>Assistência médica simplificada para todos</h1>
            <h3>Os médicos da DoctorCare vão além dos sintomas para tratar
              a causa raiz de sua doença e proporcionar uma cura a longo prazo.</h3>
            <PrimaryButton />
          </div>
          <Image src={banner} alt="img-banner" className="img" />
        </div>
        

      </Container>
    </section>
  );
}
