import Link from "next/link";
import "../../styles/header.css";
import Container from "../container";
import PrimaryButton from "../primaryButton";
import LogoComponent from "./logo";

const Header = () => {
  return (
    <>
      <nav className="header">
        <Container className="">
          <div className="nav-menu">
            <LogoComponent />
            <ul className="header-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/sobre">Sobre nós</Link>
              </li>
              <li>
                <Link href="/tips">Dicas</Link>
              </li>
              <li>
                <Link href="/contact">Contato</Link>
              </li>
              <li>
                <Link href="/partners">Parceiros</Link>
              </li>
              <li>
                <Link href="/futureProjects">Projetos</Link>
              </li>
            </ul>
            <PrimaryButton />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
