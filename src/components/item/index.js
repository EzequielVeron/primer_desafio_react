import React from 'react';
import { Link } from 'react-router-dom';
import "../Item/item.css";

const Item = ({ product }) => {
  return (
    <div className='Item'>
      <h1>{product.name}</h1>
      <Link to={`/producto/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;