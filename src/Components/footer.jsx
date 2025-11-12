import "../styles/footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.</p>
        <p>Hecho por Eduardo D'negri</p>
      </div>
    </footer>
  );
}



export default Footer