function Hobbies() {
  const hobbies = ["Videojuegos", "Lectura", "Música"];
  return (
    <>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map(hobby => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default Hobbies;
