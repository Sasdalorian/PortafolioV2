
import styles from "./Skillset.module.css";
import { motion } from "framer-motion";
import React, { useState } from 'react';

const skills = [{
  nombre: "Html",
  ruta: `src/assets/icons/html.svg`
}, {
  nombre: "Css",
  ruta: `src/assets/icons/css.svg`
}, {
  nombre: "JavaScript",
  ruta: `src/assets/icons/javascript.svg`
}, {
  nombre: "Node.js",
  ruta: `src/assets/icons/node-js.svg`
}, {
  nombre: "MySQL",
  ruta: `src/assets/icons/mysql.svg`
}, {
  nombre: "PostgreSQL",
  ruta: `src/assets/icons/postgresql.svg`
}, {
  nombre: "Git",
  ruta: `src/assets/icons/git.svg`
}, {
  nombre: "Npm",
  ruta: `src/assets/icons/npm.svg`
}]

const basicSkills = [{
  nombre: "React",
  ruta: `src/assets/icons/react.svg`
}, {
  nombre: "nextjs",
  ruta: `src/assets/icons/nextjs.svg`
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