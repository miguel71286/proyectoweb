// import Print from "../components/Print";
import "./tiendawoman.css";
import video from "../images/womanpage.mp4";

const TiendaWoman = (props) => {
  const listaTiendas = props.onTiendas;

  return (
    <div id="listadoWoman">
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop" 
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="tarjetas">
          {listaTiendas.map((elemento) => {
            // return <Print key={elemento.id} onListado={elemento}/>;
          })}
        </div> */}
    </div>
  );
};

export default TiendaWoman;
