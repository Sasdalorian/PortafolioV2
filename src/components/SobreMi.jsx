import { Element } from "react-scroll";
import styles from "./SobreMi.module.css";

export function SobreMi() {
  return (
    <Element name="sobremi">
      <div style={{marginBottom: "2rem"}}>
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Acerca de mi</h1>

        <div className={styles.container}>
          <div>
            <img src="assets/img/Nico.webp" alt="Foto" height={300} width={300} className={styles.image}/>
          </div>

          <div>
          <p style={{textAlign: "center"}} className={styles.parrafo}>
            ¡Hola! Mi nombre es Nicolás Sanhueza Díaz, aunque prefiero que me llamen Sas.
            Soy Programador Web de Valparaíso, Chile. Me inicié en la programación web a mediados del
            2022. Hice un bootcamp de Full Stack Developer en JavaScript y una vez concluido me he dedicado
            a estudiar de forma autodidacta.
          </p>

          <div className={styles.containerPdfHobbies}>
            <a className={styles.pdf} href="/PortafolioV2/src/assets/CVNicolas%20SanhuezaV2.pdf" target="_blank">Abrir CV</a>
            <div>
              <h3 className={styles.hobbies}>Hobbies</h3>
              <ul>
                <li>Naturaleza</li>
                <li>Mis gatas</li>
                <li>Videojuegos</li>
                <li>Tocar y escuchar música</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Element>
  );
}