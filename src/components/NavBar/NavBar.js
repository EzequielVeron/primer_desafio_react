import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../CartContext/index';
import chocolatory from "../../Api/img/chocolatory.jpg";
import "../NavBar/NavBar.css";



const Navbar = () => {
  const { totalQty, totalPrice } = useCartContext();

  return (
    <div className='Navbar'>
      <div className='logo'><Link to="/"><img style={{width:250, height:185}} src={chocolatory} alt="logo"/></Link> </div>
      <ul>
      <li><Link to='/'>Inicio</Link></li>
      <li><Link to='/categorias/chocolate'>chocolates</Link></li>
      <li><Link to='/categorias/untable'>Pastas</Link></li>
      <li><Link to='/categorias/dulce'></Link></li>
      <li><Link to='/cart'>Cart</Link></li>
      </ul>
      
      <p>Cantidad de Items: {totalQty}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default Navbar;