import { PAIS } from "../const";
import useClima from "../hooks/useClima";

import { useState } from "react";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");

  const { busqueda, datoBusqueda, consultarClima, } = useClima();
  const { ciudad, pais } = busqueda;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son Obligatorios");
      return;
    }
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            id="ciudad"
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            onChange={datoBusqueda}
            value={ciudad}
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select id="pais" name="pais" onChange={datoBusqueda} value={pais}>
            <option value="">--Seleccione un País--</option>
            {PAIS.map((pais) => (
              <option key={pais.id} value={pais.id}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>
      

        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
