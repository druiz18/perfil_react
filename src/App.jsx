import Header from "./components/Header";
import Tecnologias from "./components/Tecnologias";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import Objetivos from "./components/Objetivos";
import Contador from "./components/Contador";

function App() {
  const disponible = true;
  const tieneExperiencia = true;
  return (
    <>
      <Header/>
      {disponible && <p>Disponible</p>}
      <h2>{tieneExperiencia ? "Tiene experiencia" : "Buscando primera oportunidad"}</h2>
      <Tecnologias/>
      <Hobbies/>
      <Objetivos/>
      <Contador/>
      <Footer/>
    </>
  );
}

export default App;
