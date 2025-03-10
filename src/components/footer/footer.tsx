import "@/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>DoctorCare</h2>
        <p>© 2025 - DoctorCare. Todos os direitos reservados.</p>
        <p>
          Este projeto foi desenvolvido exclusivamente para fins educacionais.
        </p>
        <p>
          Desenvolvido por:
          <a
            href="https://www.linkedin.com/in/kailane-sarah"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kailane Sarah Dev
          </a>{" "}
          e
          <a
            href="https://www.linkedin.com/in/jose-rocha-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            José Rocha Dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
