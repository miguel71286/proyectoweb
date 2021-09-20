import Print from "../components/Print";
import "./tiendawoman.css";
import video from "../images/womanpage.mp4";

const TiendaWoman = (props) => {
  const listaTiendas = props.onTiendas;

  return (
    <div className="contenedor-woman">
      <div className="overlay"></div>

      <video className="video-woman"
        playsInline
        autoPlay
        muted="muted"
        loop="loop"
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="container h-100">
        <div className="d-flex h-100">
          <div className="w-100">
            <Print />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiendaWoman;
