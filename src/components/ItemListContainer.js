import React from "react";
import ItemCount from "./item.count";



export const ItemListContainer = ({texto}) =>{
const onAdd= (quantify) => {
    console.log(`compraste ${quantify} unidades`)
}

    return(
        <>
        <title greetings={texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    );
}

export default ItemListContainer;