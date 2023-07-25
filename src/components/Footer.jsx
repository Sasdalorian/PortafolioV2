import React from 'react';
import styles from './Footer.module.css';
import LinkedIn from '../assets/icons/linkedin.svg';
import Github from '../assets/icons/github.svg';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.parrafo}>
        Copyright © 2023 Sas Inc. Todos los derechos reservados. Nicolas Sanhueza Díaz
      </p>
      <div>
        <a href="https://www.linkedin.com/in/nicol%C3%A1s-sanhueza-diaz/" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} className={styles.image} alt="LinkedIN" />
        </a>
        <a href="https://github.com/Sasdalorian" target="_blank" rel="noopener noreferrer">
          <img src={Github} className={styles.image} alt="Github" />
        </a>
      </div>
    </div>
  );
}