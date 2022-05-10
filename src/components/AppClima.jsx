import Formulario from "./Formulario";
import ResultadoClima from "./ResultadoClima";
import useClima from "../hooks/useClima";

const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima();

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <div className="loading">
            <div className="chaotic-orbit "></div>
          </div>
        ) : resultado?.name ? <ResultadoClima /> : 
          noResultado ? <h2>{noResultado}</h2>
         : (
          <h2></h2>
        )}
      </main>
    </>
  );
};

export default AppClima;
