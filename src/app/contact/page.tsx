import ContactForm from "@/components/contactForm";
import ContactInfo from "@/components/contactInfo";
import ContactMap from "@/components/contactMap";
import Container from "@/components/container";
import "@/styles/contact.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <header className="contact-header  bg-(--color-brand-green-light)">
        <Container>
          <div className="contact-text text-balance">
            <h1>Entre em Contato</h1>
            <p>
              Estamos à disposição para atender você! Preencha o formulário
              abaixo ou entre em contato conosco por outros canais.
            </p>
          </div>
        </Container>
      </header>

      <Container className="">
        <section className="contact-form-section">
          <ContactForm />
          <ContactInfo />
        </section>
        <ContactMap />
      </Container>
    </div>
  );
}
