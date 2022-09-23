import React, {useState, useEffect}from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import ItemCount from "./ItemCount";



const productos= [{id:1, image:"https://picsum.photos/id/237/200/300", tittle:"black"},
    {id:2, image:"https://picsum.photos/seed/picsum/200/300", tittle:"winter"},
    {id:3, image:"https://picsum.photos/200/300?grayscale", tittle:"grey"},
];




//Contador de productos//

export const ItemListContainer = ({texto}) =>{
const [data, setData] = useState([]);


useEffect(() => {
        const getData = new Promise ((resolve) =>{
            setTimeout(()=>{
            resolve(productos);
            }, 5000);
        });
        getData.then ((res) => setData(res));
        
}, [])

const onAdd = (quantity) =>{
    console.log(`compraste ${quantity} unidades`);
}

//me devolveria las imagenes de productos//
    return(
        <>
        <title greetings={texto}/>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        
        <ItemList data={data}/>
        </>
    );
}


export default ItemListContainer;