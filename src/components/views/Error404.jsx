import imgError from "../../assets/imagenes/error404.jpg";

const Error404 = () => {
  return (
    <div>
      <div className="container error">
        <img className="imgError" src={imgError} alt="" />
        <h3>Lo sentimos, pagina que solicitaste no se encuentra disponible</h3>
        <div className="boton">
          <button type="button" className="btn btn-primary">
            <a className="nav-link active" href="/">
              Volver a la pagina de inicio
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Error404;
