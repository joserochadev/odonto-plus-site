import Link from "next/link";
import "../../styles/header.css";
const Header = () => {
    return (
        <>
            <nav>
                <ul className="header-menu">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/sobre'>Sobre nós</Link></li>
                    <li><Link href='/dicas'>Dicas</Link></li>
                    <li><Link href='/contato'>Contato</Link></li>
                    <li><Link href='/parceiros'>Parceiros</Link></li>
                    <li><Link href='/projetos'>Projetos</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Header;