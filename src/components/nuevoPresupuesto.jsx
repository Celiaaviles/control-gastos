export default function NuevoPresupuesto() {
  return (
    <>
      <div className="contenedor-presupuesto contenedor sombra">
        <form className="formulario" action="">
          <div className="campo">
            <label htmlFor="">Definir Presupuesto</label>
            <input
              className="nuevo-presupuesto"
              type="text"
              placeholder="Añade tu Presupuesto"
            />
          </div>
          <input type="submit" value="Añadir" />
        </form>
      </div>
    </>
  );
}
