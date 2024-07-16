import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { obtenerProductos } from "../../helpers/queries";
import logo from "../../../assets/imagenes/logoCatalogo.png";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  const [nombrePrenda, setNombrePrenda] = useState("");

  const productosFiltrados = productos.filter((producto) => {
    const nombrePrendaMatches =
      nombrePrenda === "" ||
      producto.nombrePrenda.toLowerCase().includes(nombrePrenda.toLowerCase());

    return nombrePrendaMatches;
  });

  console.log(productosFiltrados);

  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      if (respuesta != null) {
        setProductos(respuesta);
      } else {
        Swal.fire("Error", "No se pudo obtener los datos de la API", "error");
        // navegacion("/error404")
      }
    });
  }, []);

  console.log(productos);

  return (
    <>
      <div>
        <div className="b-cont">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="buscador-body">
            <div className="input-group">
              <input
                placeholder="Buscar por nombre de prenda..."
                value={nombrePrenda}
                onChange={(e) => setNombrePrenda(e.target.value)}
                className="busc"
              />
            </div>
          </div>

          <div>
            <ul className="cont-prod">
              {productosFiltrados.map((producto) => {
                return (
                  <li key={producto.id} className="card-cont">
                    <Card style={{ width: "18rem" }} className="c-body">
                      <Card.Img
                        variant="top"
                        src={producto.imagen}
                        className="car-imagen"
                      />
                      <Card.Body className="Car-b">
                        <Card.Title>{producto.nombrePrenda}</Card.Title>
                        <Card.Text className="card-txt">
                          {" "}
                          <p>
                            <span className="desc-car">
                              {producto.descripcion}
                            </span>
                            ,{" "}
                            <span className="bg-success">
                              ${producto.precio}
                            </span>
                            , Talle: {producto.talle}
                          </p>
                        </Card.Text>
                        <Link className="btn btn-primary"
                            target="_blank"
                            to={`https://api.whatsapp.com/send?phone=3816566750&text=%C2%A1Hola!%20Estoy%20interesado%20en%20tu%20producto: ${producto.nombrePrenda}`}>
                            Consultar
                        </Link>
                      </Card.Body>
                    </Card>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
