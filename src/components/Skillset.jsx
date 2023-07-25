
import styles from "./Skillset.module.css";
import { motion } from "framer-motion";
import React, { useState } from 'react';

const skills = [{
  nombre: "Html",
  ruta: `assets/icons/html.svg`
}, {
  nombre: "Css",
  ruta: `assets/icons/css.svg`
}, {
  nombre: "JavaScript",
  ruta: `assets/icons/javascript.svg`
}, {
  nombre: "Node.js",
  ruta: `assets/icons/node-js.svg`
}, {
  nombre: "MySQL",
  ruta: `assets/icons/mysql.svg`
}, {
  nombre: "PostgreSQL",
  ruta: `assets/icons/postgresql.svg`
}, {
  nombre: "Git",
  ruta: `assets/icons/git.svg`
}, {
  nombre: "Npm",
  ruta: `assets/icons/npm.svg`
}]

const basicSkills = [{
  nombre: "React",
  ruta: `assets/icons/react.svg`
}, {
  nombre: "nextjs",
  ruta: `assets/icons/nextjs.svg`
}]


export function SkillSet() {
  const [hoveredImage, setHoveredImage] = useState(null);

  const entraMouse = (title) => {
    setHoveredImage(title);
  };

  const saleMouse = () => {
    setHoveredImage(null);
  };

  return (
    <div id="skillset">
      <div className={styles.bgSkillset}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }}>
          <h1 className={styles.titulo}>SKILLSET</h1>
          <div className={styles.skillset}>
            {skills.map(({ nombre, ruta }) => (
              <div className={styles.imageContainer} onMouseEnter={() => entraMouse(nombre)} onMouseLeave={saleMouse} key={nombre}>
                <img className={styles.image} src={ruta} alt={nombre} width={100} height={100} />
                {hoveredImage === nombre && <div className={styles.imageText}>{nombre}</div>}
              </div>
            ))}
          </div>

          <h3 className={styles.titulo2}>CONOCIMIENTOS BASICOS</h3>
          <div className={styles.skillset}>
            {basicSkills.map(({ nombre, ruta }) => (
              <div className={styles.imageContainer} onMouseEnter={() => entraMouse(nombre)} onMouseLeave={saleMouse} key={nombre}>
                <img className={styles.image} src={ruta} alt={nombre} width={100} height={100} />
                {hoveredImage === nombre && <div className={styles.imageText}>{nombre}</div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}