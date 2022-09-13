import React, {UseState, UseEffect}from "react";
import ItemCount from "./item.count";
import ItemList from "../itemlist";


const films= [{id:1, image:"https://picsum.photos/id/237/200/300", tittle:"black"},
    {id:2, image:"https://picsum.photos/seed/picsum/200/300", tittle:"winter"},
    {id:3, image:"https://picsum.photos/200/300?grayscale", tittle:"grey"},];




//Contador de productos//

export const ItemListContainer = ({texto}) =>{
const [data, setData] = UseState([]);

UseEffect(() => {
        const getData = new Promise (resolve =>{
            setTimeout(()=>{
            resolve(films);
            }, 3000);
        });
        getData.then (res => setData(res));
    });
    
}, [];

getData.then(res => setData(res))

    const onAdd= (quantity) => {
    console.log(`compraste ${quantity} unidades`)

//Contador de productos//
    return(
        <>
        <title greetings={texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
    );
}


export default ItemListContainer;