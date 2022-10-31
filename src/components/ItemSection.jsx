
import React, {useState, useEffect, useParams} from "react";
import ItemCard from "./ItemCard";
import {doc, getDoc} from "firebase/firestore";
import   {getItems} from "../Firebase/credenciales";


const ItemSection = ({productos, nombre}) =>{




  
  return(
    <>
<h3 className="text-2xl font-bold underline self-start ml-10 my-10">
        {" "}
        {nombre} :
      </h3>
      <ul className=" flex flex-row w-full justify-evenly items-center">
        {productos
          ? productos.map((p) => (
              <li key={p.id}>
                <ItemCard product={p} />
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
    
    
  

    


export default ItemSection;