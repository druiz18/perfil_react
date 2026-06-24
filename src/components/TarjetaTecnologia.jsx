function TarjetaTecnologia({nombre, categoria, descripcion, destacada}){
  return (
    <div className="cardTecnologia">
      <p>{nombre}</p>
      <p>Categoría: {categoria}</p>
      {descripcion && (<p>{descripcion}</p>)}
      {destacada && (<p>⭐ Tecnología destacada</p>)}
    </div>
  );
}

export default TarjetaTecnologia;