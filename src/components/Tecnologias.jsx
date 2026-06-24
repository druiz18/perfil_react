import TarjetaTecnologia from "./TarjetaTecnologia";
function Tecnologias() {
  const tecnologias = [
    {
      id:1,
      nombre: "React",
      categoria: "FrontEnd",
      descripcion: "Biblioteca para construir interfaces",
      destacada: true
    },
    {
      id:2,
      nombre: "JavaScript",
      categoria: "FrontEnd"
    },
    {
      id:3,
      nombre: "Python",
      categoria: "BackEnd",
      destacada: true
    },
    {
      id:4,
      nombre: "Java",
      categoria: "BackEnd"
    }
  ]
  return (
    <>
    <h2>Tecnologías</h2>
    <div className="tecnologias">
      {
        tecnologias.map(tecnologias => (
          <TarjetaTecnologia
            key={tecnologias.id}
            nombre={tecnologias.nombre}
            categoria={tecnologias.categoria}
            descripcion={tecnologias.descripcion}
            destacada={tecnologias.destacada}
          />
        ))
      }
    </div>
    </>
  );
}

export default Tecnologias;