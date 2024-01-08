// eslint-disable-next-line react/prop-types
export default function ControlPresupuesto({ presupuesto }) {
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("es-EU", {
      style: "currency",
      currency: "EUR",
    });
  };

  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <p>Gráfica aquí</p>
        </div>
        <div className="contenido-presupuesto">
          <p>
            <span>Presupuesto: </span>
            {formatearCantidad(presupuesto)}
          </p>
          <p>
            <span>Disponible: </span>
            {formatearCantidad(0)}
          </p>

          <p>
            <span>Gastado: </span>
            {formatearCantidad(0)}
          </p>
        </div>
      </div>
    </>
  );
}
