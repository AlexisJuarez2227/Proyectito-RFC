import React, { useState } from "react";
import Automata from "../src/components/graph"; // Asegúrate de que la ruta sea correcta

function App() {

  const [rfc, setRfc] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validaRfc = (rfc) => {
    const pattern = /^A[EJJ]{3}$/i;
    return pattern.test(rfc);
  };

  const handleValidate = () => {
    setIsValid(validaRfc(rfc));
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
  <div className="bg-white p-8 rounded-lg shadow-xl border-4 border-yellow-400 w-3/4 lg:w-1/2">
    <h1 className="text-3xl font-bold text-center text-yellow-400 mb-8">Validacion de RFC</h1>
    <div className="flex flex-col items-center">
      <label className="text-lg mb-4 text-gray-700">Digite la combinacion del siguiente RFC: AEJJ</label>
      <input
        type="text"
        value={rfc}
        onChange={(e) => setRfc(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-gray-100 text-gray-800 mb-6"
      />
      <button
        onClick={handleValidate}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 ease-in-out focus:outline-none"
      >
        Validar
      </button>
      <div className="mt-6 text-lg">
        {isValid ? (
          <p className="text-green-500">RFC válido</p>
        ) : (
          <p className="text-red-500">RFC inválido</p>
        )}
      </div>
      <div className="mt-6">
        <Automata rfc={rfc} />
      </div>
    </div>
  </div>
</div>

  );
}

export default App;