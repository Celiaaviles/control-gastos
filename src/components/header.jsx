/* eslint-disable react/prop-types */
import ControlPresupuesto from "./controlPresupuesto";
import NuevoPresupuesto from "./nuevoPresupuesto";

export default function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  return (
    <>
      <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto presupuesto={presupuesto} />
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
      </header>
    </>
  );
}
