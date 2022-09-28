import React from "react";
import ItemCount from "../ItemCount/index";
import { useCartContext } from "../../Api/CartContext";


const ItemDetail = ({product}) =>{
    const {add, addToCart}= useCartContext();
    const onAdd=(quantity) => {
        addToCart(product, quantity);
    };

    return <div className="ItemDetail">
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <p>${product.price}</p>
        <p>stock {product.stock}</p>
        <ItemCount initial={1} onAdd={onAdd} />
    </div>
};

export default ItemDetail;