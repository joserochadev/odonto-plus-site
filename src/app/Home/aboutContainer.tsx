import Container from "@/components/container";
import Image from "next/image";
import ImageAbout from "@/app/assets/efeito-mask.svg";
import "@/styles/containers.css";

const AboutContainer = () => {
  return (
    <section className="main-container about-container">
      <Container className="">
        <div className="about-content">
          <Image
            src={ImageAbout}
            alt="Imagem-about"
            className="img-about w-full sm:w-1/2 h-auto"
          />
          <div className="about-text">
            <p>SOBRE NÓS</p>
            <h2>Entenda quem somos e por que existimos</h2>
            <p>
              Nossa clínica nasceu do desejo de transformar o cuidado com a
              saúde em uma experiência acolhedora e humanizada. Formada por
              especialistas apaixonados pelo que fazem, unimos tecnologia,
              inovação e empatia para oferecer um atendimento diferenciado, onde
              cada paciente é tratado com atenção e respeito. Aqui, acreditamos
              que a medicina vai além dos diagnósticos – é sobre ouvir,
              compreender e proporcionar qualidade de vida. Nossa missão é
              cuidar de você com excelência, acessibilidade e ética. Valorizamos
              a confiança de nossos pacientes e buscamos constantemente
              aprimorar nossos serviços, investindo em novas tecnologias e em um
              atendimento que coloca o ser humano no centro de tudo. Seja
              bem-vindo à nossa clínica, onde sua saúde é nossa prioridade!{" "}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutContainer;
