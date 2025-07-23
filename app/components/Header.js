import Link from 'next/link';
import styles from '../../styles/header.module.css';



export default function Header() {
    return (
        <header className={styles.navbar}>
        <nav>
            <ul className={styles['navbar-link']}>
            {['/', '/about', '/projects', '/contact'].map((href, i) => {
                const labels = ['Home', 'Sobre mí', 'Proyectos', 'Contacto'];
                return (
                <li key={href}>
                    <Link className={styles.links} href={href}>
                    {labels[i]}
                    </Link>
                </li>
                );
            })}
            </ul>
        </nav>
        </header>
    );
}
