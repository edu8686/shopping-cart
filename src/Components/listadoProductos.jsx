import "../styles/listadoProductos.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import SearchBar from "./searchBar";
import { addToCart } from "../utils/cartUtil";

function ListadoProductos() {
  const { productsData } = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const categoria = location.state?.categoriaSeleccionada;
  const searchQuery = location.state?.searchQuery?.toLowerCase();
  const [filtrados, setFiltrados] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      const resultados = productsData.filter((producto) =>
        producto.title.toLowerCase().includes(searchQuery)
      );
      setFiltrados(resultados);
    } else {
      setFiltrados(productsData);
    }
  }, [productsData, searchQuery]);

  if (!productsData || productsData.length === 0)
    return <p>Cargando productos...</p>;

  const productosABuscar =
    categoria === undefined
      ? filtrados
      : productsData.filter((product) => product.category === categoria);

  const handleAddToCart = (producto) => {
    addToCart(producto);
    alert(`✅ ${producto.title} agregado al carrito`);
  };

  return (
    <div className="listado-productos-container">
      <div className="titulo-searchbar">
        <h1 className="listado-productos-titulo">Listado de productos</h1>
        <span className="searchbar">
          <SearchBar productsData={productsData} />
        </span>
      </div>

      <ul className="listado-productos-lista">
        {productosABuscar.map((producto) => (
          <li key={producto.id} className="listado-productos-lista-item">
            <button
              className="listado-productos-boton"
              onClick={() =>
                navigate(`/products/${producto.id}`, {
                  state: { productsData: productsData },
                })
              }
            >
              <img
                src={producto.image}
                alt={producto.title}
                className="listado-productos-imagen"
              />
              <div className="listado-productos-info">
                <h4>{producto.title}</h4>
                <p className="price">${producto.price}</p>
              </div>
            </button>

            {/* 🛒 Botón para agregar */}
            <button
              className="agregar-carrito-btn"
              onClick={() => handleAddToCart(producto)}
            >
              🛒 Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListadoProductos;
