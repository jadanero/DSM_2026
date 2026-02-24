import { useState } from "react";

function Resultado({ a, b, operacion }) {
  let resultado = "";

  if (operacion) {
    switch (operacion) {
      case "+":
        resultado = a + b;
        break;
      case "-":
        resultado = a - b;
        break;
      case "×":
        resultado = a * b;
        break;
      case "÷":
        resultado = b !== 0 ? a / b : "Error (división por 0)";
        break;
      default:
        break;
    }
  }

  return (
    <div className="alert alert-info mt-3">
      <strong>Resultado:</strong> {resultado}
    </div>
  );
}

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operacion, setOperacion] = useState(null);

  const botones = ["+", "-", "×", "÷"];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Calculadora React</h2>

      {/* Entradas */}
      <div className="row mb-3">
        <div className="col">
          <input
            type="number"
            className="form-control"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            placeholder="Valor A"
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            placeholder="Valor B"
          />
        </div>
      </div>

      {/* Botones */}
      <div className="btn-group">
        {botones.map((op) => (
          <button
            key={op}
            className={`btn ${
              operacion === op ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setOperacion(op)}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Resultado */}
      <Resultado a={a} b={b} operacion={operacion} />
    </div>
  );
}

export default App;