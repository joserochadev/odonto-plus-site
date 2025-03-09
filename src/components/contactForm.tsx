import "@/styles/contact.css";

export default function ContactForm() {
  return (
    <div className="contact-form-container">
      <h2>Fale Conosco</h2>
      <form action="#" method="POST">
        <div className="mb-4">
          <label htmlFor="name" className="contact-form-label">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="contact-form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-form-input"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="contact-form-label">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-form-input"
            required
          />
        </div>
        <button type="submit" className="contact-form-button">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
