import Saludo from "./Saludo";
function Header() {
  const nombre = "Diego";
  const profesion = "Ingeniero de Sistemas";
  const ciudad = "Zipaquirá";

  const añoActual = 2026;
  const añoNacimiento = 1995;

  return (
    <>
      <h1>Hola, soy {nombre}</h1>
      <Saludo />
      <p>Profesión: {profesion}</p>
      <p>Ciudad: {ciudad}</p>

      <h2>Tengo {añoActual - añoNacimiento} años</h2>
    </>
  );
}

export default Header;
