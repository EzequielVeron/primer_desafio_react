import "./itemCount.css";

import React, {UseState} from "react";

export const itemCount = ({initial, stock, onAdd}) =>{
    const [count, setcount] = UseState(parseInt(initial));

    const decrease = () => {
        setcount(count - 1);
     }

    const increase = () => {
        setcount(count + 1);
     }

    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>count</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0 } onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default itemCount;