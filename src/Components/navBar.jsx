import { Link } from "react-router-dom";
import "../styles/navBar.css";
import { useState } from "react";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categorias = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">Mi Tienda</Link>
        </div>
        <nav>
          <div className="nav-mobile">
            <a id="navbar-toggle" href="#!">
              <span></span>
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/">Home page</Link>
            </li>
            <li className="products-with-dropdown">
              <a href="#!" onClick={toggleDropdown}>
                Products <span className="dropdown-toggle">&#x25BE;</span>
              </a>

              {dropdownOpen && (
                <ul className="navbar-dropdown show">
                  {categorias.map((categoria, index) => (
                    <li key={index}>
                      <Link
                        to="/products"
                        state={{
                          categoriaSeleccionada: categoria,
                          textoBoton: categoria,
                        }}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {categoria}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default NavBar;
