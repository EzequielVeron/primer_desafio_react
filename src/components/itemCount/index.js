import React, {UseState, UseEffect} from "react";


import "./itemCount.css";

export const itemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = UseState(parseInt('initial'));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    UseEffect(()=> {
        setCount(parseInt(initial));
    },[initial] )



    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>Count</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0 } onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default itemCount;