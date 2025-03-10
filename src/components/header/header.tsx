"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "../../styles/header.css";
import Container from "../container";
import PrimaryButton from "../primaryButton";
import LogoComponent from "./logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header">
      <Container>
        <div className="nav-menu">
          <LogoComponent />
          {isMobile && (
            <button type="button" className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? "✖" : "☰"}
            </button>
          )}
          <ul className={`header-menu ${menuOpen ? "open" : "hidden"}`}>
            <li>
              <Link href="/">Home</Link>
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
          <div className="hidden sm:block">
            <PrimaryButton />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
