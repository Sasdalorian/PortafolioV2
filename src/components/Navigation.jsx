import React, { useState } from 'react';
import styles from "./Navigation.module.css";
import logoSas from "../assets/img/logoSas.png";
import { Link } from "react-scroll";

const links = [
  { label: "Inicio", route: "inicio" },
  { label: "Sobre Mi", route: "sobremi" },
  { label: "Skillset", route: "skillset" },
  { label: "Proyectos", route: "proyectos" },
  { label: "Contacto", route: "contacto" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${styles.navbar_bg} navbar-expand-lg fixed-top`}>
        <div className={`container-fluid`}>
          <img src={logoSas} alt="Logo" className={`navbar-brand mb-0 h1 ${styles.logo}`} />
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span> <img src='assets/img/menusquared.png' height={"30rem"}></img></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className={`navbar-nav ${styles.navbar_ul} mb-2 mb-lg-0`}>
              {links.map(({ label, route }) => (
                <li className={`nav-item`} key={route}>
                  <Link className={styles.navbar_links} to={route} spy={true} smooth={true} offset={-70} duration={500} onClick={handleLinkClick}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}