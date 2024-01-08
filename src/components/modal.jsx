/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import Cerrar from "./../img/cerrar.svg";
import Mensaje from "./Mensaje";

// eslint-disable-next-line react/prop-types
export default function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
}) {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const ocultarModal = () => {
    setModal(false);
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <>
      <div className="modal">
        <div className="cerrar-modal">
          <img src={Cerrar} alt="cerrar modal" onClick={ocultarModal} />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`formulario ${animarModal ? "animar" : "cerrar"}`}
          action=""
        >
          <legend>Nuevo Gasto</legend>
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
          <div className="campo">
            <label htmlFor="nombre">Nombre Gasto</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Añade el Nombre del Gasto"
            />
          </div>
          <div className="campo">
            <label htmlFor="cantidad">Cantidad</label>
            <input
              id="cantidad"
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              placeholder="Añade la Cantidad del Gasto: ej. 300"
            />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoría</label>
            <select
              name=""
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscriptiones">Suscripciones</option>
            </select>
          </div>

          <input type="submit" value="Añadir Gasto" />
        </form>
      </div>
    </>
  );
}
