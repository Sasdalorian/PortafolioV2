import './App.css';

// COMPONENTS
import { Bienvenida } from './components/Bienvenida';
import { Navigation } from './components/Navigation';
import { SobreMi } from './components/SobreMi';
import { SkillSet } from './components/Skillset';
import { Proyectos } from './components/Proyectos';
import Contacto from './components/Contacto';
import { Footer } from './components/Footer';

//Style CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navigation />
    <Bienvenida />
    <SobreMi />
    <SkillSet />
    <Proyectos />
    <Contacto title={"Contacto"}/>
    <Footer />
    </>
  )
}

export default App
