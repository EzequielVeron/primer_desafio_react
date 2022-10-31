import React from "react";

function CartItem({ producto }) {
  return (
    <div className="w-1/2 mx-auto  flex justify-around items-center text-xl border-slate-200 border-2 my-3 rounded-lg">
      <div className="w-1/4">
        <img src={producto.image} alt="" className="w-2/3 rounded-md" />
      </div>
      <div>
        <h3>{producto.nombre}</h3>
      </div>
      <div>
        <p>${producto.price}</p>
      </div>
    </div>
  );
}

export default CartItem;
