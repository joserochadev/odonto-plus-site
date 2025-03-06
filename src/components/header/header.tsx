import Link from "next/link";
import "../../styles/header.css";
import LogoComponent from "./logo";
import SecondaryButton from "../secondaryButton";
const Header = () => {
    return (
        <>
            <nav className="nav-menu">
                <LogoComponent />
                <ul className="header-menu">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/sobre'>Sobre nós</Link></li>
                    <li><Link href='/dicas'>Dicas</Link></li>
                    <li><Link href='/contato'>Contato</Link></li>
                    <li><Link href='/parceiros'>Parceiros</Link></li>
                    <li><Link href='/projetos'>Projetos</Link></li>
                </ul>
                <SecondaryButton/>
            </nav>
        </>
    );
}

export default Header;