import banner from "@/app/assets/banner-01.svg";
import PrimaryButton from "@/components/primaryButton";
import Image from "next/image";
import "@/styles/containers.css";
import Container from "@/components/container";

export default function IntroductionContainer() {
  return (
    <section className="introduction-container">
      <Container className="">
        <div className="content introduction-content">
          <div className="content">
            <p>BOAS-VINDAS A DOCTORCARE 👋</p>
            <h1>Assistência médica simplificada para todos</h1>
            <p>
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </p>
            <PrimaryButton />
          </div>
          <Image src={banner} alt="img-banner" className="img" />
        </div>
      </Container>
    </section>
  );
}
