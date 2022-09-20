import React, {useState, useEffect}from "react";
import {useParams} from "react-router-dom"



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
            }, 3000);
        });
        getData.then ((res) => setData(res));
        
}, []);

    

//Contador de productos//
    return(
        <>
        <title greetings={texto}/>
        
        <h2>ItemDetail data={data}</h2>
        </>
    );
}


export default ItemListContainer;