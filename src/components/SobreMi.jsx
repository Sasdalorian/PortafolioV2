import { Element } from "react-scroll";

export function SobreMi() {
  return (
    <Element name="sobremi">
      <div style={{marginBottom: "2rem"}}>
        <h1 style={{textAlign: "center", marginTop: "2rem"}}>Acerca de mi</h1>

        <p style={{textAlign: "center"}}>
          ¡Hola! Mi nombre es Nicolás Sanhueza Díaz, aunque prefiero que me llamen Sas.
          Soy de Valparaíso, Chile. De 25 años, siendo una persona adaptable, responsable y con muchas ganas de seguir
          aprendiendo.
        </p>
      </div>
    </Element>
  );
}