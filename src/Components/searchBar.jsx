import "../styles/homePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ productsData }) {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const searchTerm = search.trim().toLowerCase();

      if (!searchTerm) {
        setError("Por favor ingresá un término válido.");
        return;
      }

      // Verificar coincidencias
      const coincidencias = productsData?.some((producto) =>
        producto.title.toLowerCase().includes(searchTerm) ||
        producto.description.toLowerCase().includes(searchTerm) ||
        producto.category.toLowerCase().includes(searchTerm)
      );

      if (!coincidencias) {
        setError("No se encontraron coincidencias.");
        return;
      }

      setError(null); // limpiar errores
      navigate("/products", { state: { searchQuery: search } });
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        className="home-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
