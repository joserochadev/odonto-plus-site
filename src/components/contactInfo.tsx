import "@/styles/contact.css";

export default function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h2>Nossos Contatos</h2>
      <div className="mb-6">
        <h3>Endereço</h3>
        <p>Rua da Saúde, 123 - Centro, Cidade, Estado</p>
      </div>
      <div className="mb-6">
        <h3>Telefone</h3>
        <p>(XX) XXXX-XXXX</p>
      </div>
      <div className="mb-6">
        <h3>Email</h3>
        <p>contato@clinicadental.com</p>
      </div>
      <div className="mb-6">
        <h3>Horário de Atendimento</h3>
        <p>Segunda a Sexta: 08:00 - 18:00</p>
        <p>Sábado: 08:00 - 12:00</p>
        <p>Domingo: Fechado</p>
      </div>
    </div>
  );
}
