import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Api/CartContext";



const NavBar = () => {
  const {TotalQuantity, TotalPrice} = useCartContext();
    return (
        <div className="menu">

<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><Link to="/">Inicio</Link>0</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">carrito</a>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
<p>Total: ${TotalPrice}</p>
<p>Cantidad de productos:{TotalQuantity}</p>
        </div>
    )

}

export default NavBar;