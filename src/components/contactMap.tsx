import "@/styles/contact.css";

export default function ContactMap() {
  return (
    <section className="contact-map-section">
      <h2>Nos Visite</h2>
      <div className="contact-map-container">
        <iframe
          title="Localização da Clínica"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.45767176256!2d-46.63881882776089!3d-23.55052056735758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597e2a7c9c81%3A0x8cddbbf625b58ee7!2sSão%20Paulo%2C%20SP!5e0!3m2!1sen!2sbr!4v1615197425242!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          aria-hidden="false"
        />
      </div>
    </section>
  );
}
