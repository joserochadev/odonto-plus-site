import ContactForm from "@/components/contactForm";
import ContactInfo from "@/components/contactInfo";
import ContactMap from "@/components/contactMap";
import Container from "@/components/container";

const ContactContainer = () => {
  return (
    <div className="contact-container">
      <header className="contact-header ">
        <Container>
          <div className="contact-text text-balance">
            <h2>Entre em contato agora mesmo!</h2>
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
};

export default ContactContainer;
