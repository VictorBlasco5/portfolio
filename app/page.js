
import styles from '../styles/home.module.css';
import { Briefcase, Wrench, FileDownIcon } from 'lucide-react';




export default function Home() {
  return (
    
    <section className={styles.aboutSection}>
            <h1 className={styles.name}>Víctor Blasco Pérez - Full Stack Develloper</h1>
            <h1 className={styles.title}>Sobre mí</h1>

            {/* Bloque de historia profesional */}
            <div className={styles.card}>
                <Briefcase className={styles.icon} />
                <h2>Trayectoria</h2>
                <p>
                    Profesional con experiencia en el desarrollo y mantenimiento de webs. Destaco por mi capacidad para aprender rápido, adaptarme a nuevas tecnologías y trabajar en equipo. Tras una primera etapa de experiencia laboral enriquecedora en Lion Capital Group, busco nuevos retos que me permitan seguir aprendiendo, aportar valor y consolidar mi desarrollo profesional.
                </p>
            </div>

            {/* Bloque de tecnologías */}
            <div className={styles.card}>
                <Wrench className={styles.icon} />
                <h2>Stack tecnológico</h2>
                <div className={styles.techGrid}>
                    {['React', 'Next.js', 'Laravel', 'Node.js', 'MySQL', 'Git', 'Bootstrap', 'Tailwind'].map((tech) => (
                        <span key={tech} className={styles.techItem}>{tech}</span>
                    ))}
                </div>
            </div>

            {/* Botón de CV */}
            <div className={styles.card}>
                <FileDownIcon className={styles.icon} />
                <h2>Currículum</h2>
                <a href="/cv.pdf" className={styles.downloadBtn} download>
                    Descargar CV
                </a>
            </div>
        </section>
  );
}


