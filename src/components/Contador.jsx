import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <h1>{contador}</h1>
      <div className="contador">
        <button onClick={() => setContador(c => c - 1)}>-</button>
        <button onClick={() => setContador(0)}>Reiniciar</button>
        <button onClick={() => setContador(c => c + 1)}>+</button>
      </div>
    </>
  );
}

export default Contador;
