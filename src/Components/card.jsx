import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../styles/card.css'

function Card() {
  const { id } = useParams(); // este id viene de /products/:

  const location = useLocation();

  const productsData = location.state?.productsData;

  const product = productsData?.find((p) => p.id.toString() === id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="producto-detalle-container">
      <div className="producto-detalle-card">
        <img
          className="producto-imagen"
          src={product.image}
          alt={product.title}
        />
        <div className="producto-info">
          <h1 className="producto-titulo">{product.title}</h1>
          <h3 className="producto-categoria">{product.category}</h3>
          <p className="producto-descripcion">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
