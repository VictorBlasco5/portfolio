"use client";

import { useEffect, useState } from 'react';
import styles from '../styles/home.module.css';
import { Wrench, FileDownIcon } from 'lucide-react';
import {
  SiJavascript, SiTypescript, SiRedux, SiReact, SiCss3, SiHtml5, SiNextdotjs,
  SiPhp, SiLaravel, SiNodedotjs, SiExpress, SiTypeorm, SiMysql, SiMongodb,
  SiGithub, SiBootstrap, SiTailwindcss, SiTestinglibrary
} from 'react-icons/si';

const techIcons = {
  JavaScript: <SiJavascript size={40} color="#414141ff" />,
  TypeScript: <SiTypescript size={40} color="#414141ff" />,
  HTML: <SiHtml5 size={40} color="#414141ff" />,
  CSS: <SiCss3 size={40} color="#414141ff" />,
  Redux: <SiRedux size={40} color="#414141ff" />,
  React: <SiReact color="#414141ff" size="40px" />,
  'Next.js': <SiNextdotjs size="40px" color="#414141ff" />,
  PHP: <SiPhp size={40} color="#414141ff" />,
  Laravel: <SiLaravel color="#414141ff" size="40px" />,
  'Node.js': <SiNodedotjs color="#414141ff" size="40px" />,
  Express: <SiExpress size={40} color="#414141ff" />,
  TypeORM: <SiTypeorm size={40} color="#414141ff" />,
  MySQL: <SiMysql color="#414141ff" size="40px" />,
  "Mongo DB": <SiMongodb size={40} color="#414141ff" />,
  Github: <SiGithub color="#414141ff" size="40px" />,
  Bootstrap: <SiBootstrap color="#414141ff" size="40px" />,
  Tailwind: <SiTailwindcss color="#414141ff" size="40px" />,
  "QA Testing": <SiTestinglibrary size={40} color="#414141ff" />,
};

export default function Home() {
  const [height, setHeight] = useState(300);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    function getMaxHeight() {
      return window.innerWidth >= 2500 ? 500 : 400;
    }

    const minHeight = 100;
    const scrollRange = 500;

    function handleScroll() {
      const maxHeight = getMaxHeight();
      const scrollY = window.scrollY || window.pageYOffset;
      const clampedScroll = Math.min(scrollY, scrollRange);
      const factor = clampedScroll / scrollRange;
      const newHeight = maxHeight - ((maxHeight - minHeight) * factor);
      setHeight(newHeight);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Mensaje enviado");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("");
        }, 4000);
      } else {
        setStatus("❌ Error al enviar");
      }
    } catch (error) {
      setStatus("❌ Error en el servidor");
    }
  };

  return (
    <section className={styles.container}>
      {/* HOME */}
      <div
        id="home"
        className={styles.heroAnimatedBox}
        style={{
          height: `${height}px`,
          marginTop: `${(300 - height) / 2}px`,
        }}
      >
        <h1 className={styles.name}>VÍCTOR BLASCO</h1>
        <h4 className={styles.subname}>DESARROLLADOR WEB</h4>
        <h2 className={styles.textHome}>Soy desarrollador web fullstack con pasión por crear soluciones digitales modernas, accesibles y eficientes. Me entusiasma transformar ideas en experiencias funcionales y bien diseñadas.</h2>
      </div>

      {/* SOBRE MÍ */}
      <h1 id="about" className={styles.title}>SOBRE MÍ</h1>
      <div className={styles.boxTrajectory}>
        <div className={styles.trajectory}>
          <p>
            Soy desarrollador web fullstack con pasión por crear soluciones digitales modernas, accesibles y eficientes. Me entusiasma transformar ideas en experiencias funcionales y bien diseñadas, cuidando tanto la parte visual como el rendimiento y la estructura técnica. <br /><br />
            Me formé en Geekshubs Academy, donde completé un bootcamp intensivo de desarrollo web fullstack. Durante esa etapa, trabajé con tecnologías tanto de frontend como de backend, lo que me permitió adquirir una visión completa del desarrollo de aplicaciones y consolidar buenas prácticas profesionales.<br /><br />
            Tras finalizar el bootcamp, trabajé durante seis meses en Lion Capital Group, donde tuve la oportunidad de desarrollar la web corporativa oficial de la empresa, actualmente en funcionamiento. Esta experiencia me permitió aplicar mis conocimientos en un entorno real y profesional, enfrentándome a desafíos técnicos y colaborando con otros equipos.
          </p>

          <div className={styles.downloadContainer}>
            <a href="/cv.pdf" className={styles.downloadBtn} download>
              Descargar CV
            </a>
          </div>
        </div>

        <div className={styles.technology}>
          <h2 className={styles.titleStack}><Wrench className={styles.icon} />Stack tecnológico</h2>
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

      {/* PROYECTOS */}
      <h1 id="projects" className={styles.title}>PROYECTOS</h1>
      <div className={styles.proyects}>
        <div className={styles.card}>
          <div className={styles.boxCard}>
            <div className={styles.cardFront}>
              <img src="images/lion3.png" alt="Lion Project" />
            </div>
            <div className={styles.cardBack}>
              <img src="images/filter-lion.png" alt="Lion Project Filtered" />
            </div>
          </div>
        </div>
        <a href="https://lioncapitalg.com" target="_blank" rel="noopener noreferrer" className={styles.buttonLive}>
          Live
        </a>

        <div className={styles.card}>
          <div className={styles.boxCard}>
            <div className={styles.cardFront}>
              <img src="images/home-dunk.jpg" alt="Dunk Project" />
            </div>
            <div className={styles.cardBack}>
              <img src="images/dunk.jpg" alt="Dunk Project Alt" />
            </div>
          </div>
        </div>
        <a href="https://lioncapitalg.com" target="_blank" rel="noopener noreferrer" className={styles.buttonLive}>
          Live
        </a>
      </div>

      {/* CONTACTO */}
      <h1 id="contact" className={styles.title}>CONTACTO</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Nombre
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.name}
            placeholder="Escribe tu nombre"
            required
          />
        </label>

        <label className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.name}
            placeholder="ejemplo@correo.com"
            required
          />
        </label>

        <label className={styles.label}>
          Mensaje
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.text}
            placeholder="Escribe tu mensaje"
            rows="5"
            required
          />
        </label>

        <button type="submit" className={styles.buttonSend}>
          Enviar
        </button>
        <p>{status}</p>
      </form>

    </section>
  );
}
