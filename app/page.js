import styles from '../styles/home.module.css';
import { Briefcase, Wrench, FileDownIcon } from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiReact,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiTypeorm,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiBootstrap,
  SiTailwindcss,
  SiTestinglibrary,
} from 'react-icons/si';

const techIcons = {
  JavaScript: <SiJavascript size={40} color="#F7DF1E" />,
  TypeScript: <SiTypescript size={40} color="#3178C6" />,
  HTML: <SiHtml5 size={40} color="#E34F26" />,
  CSS: <SiCss3 size={40} color="#1572B6" />,
  Redux: <SiRedux size={40} color="#764ABC" />,
  React: <SiReact color="#61DAFB" size="40px" />,
  'Next.js': <SiNextdotjs size="40px" />,
  PHP: <SiPhp size={40} color="#777BB4" />,
  Laravel: <SiLaravel color="#FF2D20" size="40px" />,
  'Node.js': <SiNodedotjs color="#339933" size="40px" />,
  Express: <SiExpress size={40} color="#000000" />,
  TypeORM: <SiTypeorm size={40} color="#336791" />,
  MySQL: <SiMysql color="#4479A1" size="40px" />,
  "Mongo DB": <SiMongodb size={40} color="#47A248" />,
  Github: <SiGithub color="#000000ff" size="40px" />,
  Bootstrap: <SiBootstrap color="#7952B3" size="40px" />,
  Tailwind: <SiTailwindcss color="#38B2AC" size="40px" />,
  "QA Testing": <SiTestinglibrary size={40} color="#E33332" />,
};

export default function Home() {
  return (
    <section className={styles.container}>
      {/* HOME */}
      <h1 className={styles.name}>Hola! Soy Víctor Blasco.</h1>
      <h2 className={styles.textHome}>Texto breve de intruducción para que me conozcan.</h2>

      {/* SOBRE MI */}
      <h1 className={styles.title}>Sobre mí</h1>
      <div className={styles.boxTrajectory}>
        <div className={styles.trajectory}>
          <p>
            Soy desarrollador web fullstack con pasión por crear soluciones digitales modernas, accesibles y eficientes. Me entusiasma transformar ideas en experiencias funcionales y bien diseñadas, cuidando tanto la parte visual como el rendimiento y la estructura técnica. <br /><br />

            Me formé en Geekshubs Academy, donde completé un bootcamp intensivo de desarrollo web fullstack. Durante esa etapa, trabajé con tecnologías tanto de frontend como de backend, lo que me permitió adquirir una visión completa del desarrollo de aplicaciones y consolidar buenas prácticas profesionales.<br /><br />

            Tras finalizar el bootcamp, trabajé durante seis meses en Lion Capital Group, donde tuve la oportunidad de desarrollar la web corporativa oficial de la empresa, actualmente en funcionamiento. Esta experiencia me permitió aplicar mis conocimientos en un entorno real y profesional, enfrentándome a desafíos técnicos y colaborando con otros equipos.
          </p>

          {/* Botón de CV */}
          <div className={styles.downloadContainer}>
            <FileDownIcon className={styles.icon} />
            <a href="/cv.pdf" className={styles.downloadBtn} download>
              Descargar CV
            </a>
          </div>
        </div>

        {/* Bloque de tecnologías */}
        <div className={styles.technology}>
          <h2 className={styles.titleStack} ><Wrench className={styles.icon} />Stack tecnológico</h2>
          <div className={styles.techGrid}>
            {Object.entries(techIcons).map(([tech, IconComponent]) => (
              <div key={tech} className={styles.techItem}>
                {IconComponent}
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
