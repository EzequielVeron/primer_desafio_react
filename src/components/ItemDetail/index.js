import React from "react";
import  ItemCount from "ItemCount";
import {useState} from "react";
import { Link } from "react-router-dom";


export const ItemDetail = (data) => {
    const [GoToCart, SetGoToCart] = useState (false);


    const onAdd= () => {
        SetGoToCart(true);
        };
    return (<>
        <div className="container">
        <div className="detail">
            <img className="detail_image" src={data.image} alt="" /> 
            <div className="content">
                <h1>{data.tittle}</h1>
                {
                    GoToCart
                    ? <Link to="/cart">Terminar compra</Link>
                    :    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
}
        </div>
            </div>
            </div> 
            </>
    );
}

export default ItemDetail;