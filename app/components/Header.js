
import styles from '../../styles/header.module.css';



export default function Header() {
  const links = ['#home', '#about', '#projects', '#contact'];
  const labels = ['Home', 'Sobre mí', 'Proyectos', 'Contacto'];

  return (
    <header className={styles.navbar}>
      {/* <nav>
        <ul className={styles['navbar-link']}>
          {links.map((href, i) => (
            <li key={href}>
              <a className={styles.links} href={href}>
                {labels[i]}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}

