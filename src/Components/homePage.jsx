import "../styles/homePage.css";
import fondo from "../assets/pngtree-3d-render-mobile-app-shopping-e-commerce-concept-image_3702173.jpg";
import SearchBar from "./searchBar";
import { useOutletContext } from "react-router-dom";

function HomePage() {

  const { productsData } = useOutletContext();
  

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${fondo})` }}>
      <div className="home-overlay">
        <h1 className="home-title">Bienvenido</h1>
        <SearchBar productsData={productsData} />
      </div>
      
    </div>
  );
}

export default HomePage;
