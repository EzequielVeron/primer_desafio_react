import item from "../item/";
import React from "react";
import Item from "../item";


const ItemList = () => {
    return (
        data.map(film=> <Item key={film.id} info={film}/>)
    );
}



export default ItemList;