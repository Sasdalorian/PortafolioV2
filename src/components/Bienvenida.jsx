
import React from "react";
import styles from "./Bienvenida.module.css";
import videoPath from "../assets/video/video.mp4";
import { Element } from "react-scroll";

export function Bienvenida() {
  return (
    <Element className={styles.bienvenida} id="inicio">
      <video className={styles.video_background} autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>Nicolás Sanhueza Díaz</h1>
        <h3>Full Stack Developer</h3>
      </div>
    </Element>
  );
}
