import React from 'react'
import { Link } from 'react-router-dom';
import {useCartContext } from '../context/CartProvider'

const CartWidget = () => {
const {finalProducts } = useCartContext();

  return (
    <div >
        <Link to="/Cart" >carrito</Link>
        <span>{finalProducts() || ''}</span>
    </div>
  )
};

export default CartWidget