import { useState } from "react";
import Mensaje from "./mensaje";

/* eslint-disable react/prop-types */
export default function NuevoPresupuesto({ presupuesto, setPresupuesto }) {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDeafault();
    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setMensaje("No es un presupuesto válido");
      return;
    }

    setMensaje("");
  };

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlePresupuesto} className="formulario">
          <div className="campo">
            <label>Definir Presupuesto</label>
            <input
              className="nuevo-presupuesto"
              type="text"
              placeholder="Añade tu Presupuesto"
              value={presupuesto}
              onChange={(e) => setPresupuesto(e.target.value)}
            />
          </div>
          <input type="submit" value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      </div>
    </>
  );
}
