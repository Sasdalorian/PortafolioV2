
import styles from "./Proyectos.module.css";

const proyectos = [{
  titulo: "BLOG CAFE",
  ruta: "assets/img/BlogCafe.webp",
  descripcion: `Este proyecto representa uno de mis primeros logros en desarrollo web, utilizando solo HTML y CSS. 
  Fue diseñado para aprender y experimentar con tecnologías como Grid y Flexbox, 
  así como para practicar la incorporación de imágenes, creación de botones y funcionalidad del Navbar.`,
  view: "https://proyecto3cafeblogsas.netlify.app/index.html",
  github: "https://github.com/Sasdalorian/AllProyects/tree/master/Proyecto%203%20-%20BlogCafe"
}, {
  titulo: "ENCRIPTADOR / DESENCRIPTADOR",
  ruta: "assets/img/Encriptador.webp",
  descripcion: `Este proyecto fue pedido en un <strong>Challenge de Oracle + Alura</strong>, fue la primera vez que implemente JavaScript, en el cual se pedía encriptar o desencriptar textos.`,
  descripcion2: `La letra "e" es convertida para "enter", La letra "i" es convertida para "imes", La letra "a" es convertida para "ai", La letra "o" es convertida para "ober", La letra "u" es convertida para "ufat",
  Por ejemplo: "gato" => "gaitober" - gaitober" => "gato".`,
  view: "https://encriptadordesencripadorsas.netlify.app/",
  github: "https://github.com/Sasdalorian/AllProyects/tree/master/Proyecto%204%20-%20Encriptador"
}, {
  titulo: "DEPORTES JS",
  ruta: "assets/img/DeporteJS.webp",
  descripcion: `Proyecto Grupal para <strong>Talento Digital</strong>, el proyecto consiste en crear un carrito de compra y una lista de productos, donde se podrá agregar la cantidad que uno desee, dentro del carrito de compra se vería el total a pagar, incluyendo el IVA, se podría eliminar productos, e incluir un 5% del valor cómo cargo adicional de envio mientras que el valor total sea menor a $100.000 IVA incluido.
  Al terminar la compra se genera una boleta con el detalle de los productos comprados y los totalizadores de compra.`,
  view: null,
  github: "https://github.com/Sasdalorian/AllProyects/tree/master/Proyecto%205%20-%20DeportesJS"
}, {
  titulo: "FORMULA 1",
  ruta: "assets/img/Formula1.webp",
  descripcion: `Para este proyecto de Formula 1, se requirío desarrollar una pagina que permita ingresar los resultados de cada una de las carreras,
  considerando el piloto, minutos totales en que recorre el circuito y la ubicación de cierre. Además de un indicador de si se abandona la carrera por problemas técnicos o personales.`,
  descripcion2: `Desarrollar una página que permita validar el puntaje total del periodo, mostrando el resultado de cada carrera por piloto. Además de otra página donde se pueda obtener los puntajes por equipo y disponibilizar
  la cantidad de abandonos por piloto indicando un ranking con los resultados totales.`,
  view: null,
  github: "https://github.com/Sasdalorian/AllProyects/tree/master/Proyecto%206%20-%20Formula1"
}, {
  titulo: "EARTH VOLUNTEERS",
  ruta: "assets/img/EarthVolunteers.webp",
  descripcion: `Este proyecto fue mi trabajo final para <strong>Talento Digital</strong>, se nos solicito empezar con una idea desde 0 para poder desarrollar una web desde el Front, Back e incluir una Base de datos, se me ocurrío la idea donde las personas puedan hacer voluntariados en distintas areas y que puedan obtener recompensas cómo estadía, comida o lo que la persona que suba el voluntariado pueda dar.`,
  descripcion2: `En este proyecto se utilizo Bootstrap, JavaScript, Express, Hbs, Bcrypt, Passport-jwt, PostgreSQL y Sequelize.`,
  view: null,
  github: "https://github.com/Sasdalorian/Proyecto-Individual",
}, {
  titulo: "CONTADOR DE CLICKS Y CALCULADORA",
  ruta: "assets/img/ContadorYCalculadora.webp",
  descripcion: "He desarrollado estos dos proyectos utilizando React y el hook useState. Estas experiencias me ayudaron a comprender mejor los componentes y mejorar mis habilidades en el desarrollo de aplicaciones web.",
  view: null,
  github: "https://github.com/Sasdalorian/AllProyects/tree/master/Proyecto%207%20-%20ContadorDeClicks",
  github2: "https://github.com/Sasdalorian/AllProyects/tree/master/Proyecto%208%20-%20Calculadora"
}]

export function Proyectos() {
  return (
    <div id="proyectos">
      <h1 className={`${styles.titulo}`}>PROYECTOS</h1>
      <div className={styles.proyectos}>
        {proyectos.map(({ titulo, ruta, descripcion, descripcion2, github, view }) => (
          <div className={styles.bgProyectos} key={titulo}>
            <h3 className={styles.tituloP}>{titulo}</h3>
            <div className={styles.container_proyectos}>
              <div className={styles.container_img}>
                <img src={ruta} alt="ProyectoIMG" className={styles.image} width={400} height={400} />
              </div>
              <div className={styles.descripcion}>
                <div dangerouslySetInnerHTML={{ __html: descripcion }} />
                <br />
                <div>{descripcion2}</div>
                <br />
                <div className={styles.links}>
                  {view !== null && (
                    <a className={styles.linkstarget} href={view} target="_blank" rel="noopener noreferrer">
                      <img src="assets/icons/view.svg" width={40} height={40} title="Ir a ver" alt="View" />
                    </a>
                  )}
                  <a className={styles.linkstarget} href={github} target="_blank" rel="noopener noreferrer">
                    <img src="assets/icons/whitegithub.svg" width={40} height={40} title="Repositorio" alt="Repositorio" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}