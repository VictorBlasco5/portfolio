"use client";

import { useState } from "react";
import styles from '../../styles/header.module.css';



export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ['#home', '#about', '#projects', '#contact'];
  const labels = ['Home', 'Sobre mí', 'Proyectos', 'Contacto'];

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>

        {/* Botón hamburguesa */}
        <button
          className={`${styles.hamburger} ${open ? styles.active : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <nav className={`${styles.navMenu} ${open ? styles.open : ""}`}>
          <ul>
            {links.map((href, i) => (
              <li key={href}>
                <a
                  className={styles.links}
                  href={href}
                  onClick={() => setOpen(false)}
                >
                  {labels[i]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

