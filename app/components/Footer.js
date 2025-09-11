import styles from '../../styles/footer.module.css';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.marginLeft}></div>

      <p>© 2025 Víctor Blasco - Todos los derechos reservados.</p>

      <div className={styles.social}>
        <div className={styles.media}>
          <a href="https://github.com/VictorBlasco5" target="_blank" rel="noopener noreferrer">
            <SiGithub size={20} color="#414141ff" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/victor-blasco-4b7588304/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin size={20} color="#414141ff" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
