// App.jsx
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/navBar'
import Footer from './Components/footer'
import { useEffect, useState } from 'react'

function App() {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        setProductsData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Outlet context={{ productsData, loading }} />
      </main>
      <Footer />
    </>
  )
}

export default App;
