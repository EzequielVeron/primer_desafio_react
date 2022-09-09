import "./itemCount.css";

import React, {UseState, UseEffect} from "react";

export const itemCount = ({initial, stock, onAdd}) =>{
    const [Count, setCount] = UseState(parseInt(initial));

    const decrease = () => {
        setCount(Count - 1);
    }

    const increase = () => {
        setCount(Count + 1);
    }

    UseEffect(()=> {
        setCount(parseInt(initial));
    },[initial] )



    return (
        <div className="counter">
            <button disabled={Count <= 1} onClick={decrease}>-</button>
            <span>Count</span>
            <button disabled={Count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0 } onClick={()=> onAdd(Count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default itemCount;