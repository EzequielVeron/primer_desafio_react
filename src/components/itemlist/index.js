import Item from "../item";
import React from "react";



const ItemList = ({data=[]}) => {
    return (
        data.map(films=> <Item key={films.id} info={films}/>)
    );
};



export default ItemList;