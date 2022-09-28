import React from "react";
import { Link } from "react-router-dom";




const Item = ({ product }) => {
    return (
    <div className='Item'>
        <h1>{product.name}</h1>
        <Link to={`/producto/${product.id}`} >Ver detalle</Link>
        
    </div>
    );
};

export default Item;
