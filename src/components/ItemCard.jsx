import React from "react";
import { Link } from "react-router-dom";

function ItemCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`}>
      <div
        className="w-[350px] h-[350px] flex flex-col grow justify-center items-center shadow-2xl rounded-xl border-slate-300 border-2
      hover:scale-105
      "
      >
        <img
          src={product.image}
          alt={product.image}
          className="min-w-full h-auto"
        />
        <h3 className="font-bold text-xl">{product.nombre}</h3>
        <div className="flex items-center">
          <p className="text-slate-600 line-through">
            ${(product.price ) }
          </p>
          <span className="mx-2"> →</span>
          <span className="flex items-center">
            <p className="font-bold mx-1 text-lg">
              ${product.price }
            </p>
            {product.description}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
