
import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail";





const film = { id:1, Image:"../components/app/img/relleno_bonobon.jpg", tittle:"pasta bonobon"};



export const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect (() =>{
        const getData = new Promise((resolve => {
            setTimeout(()=>{
                resolve(film);
            }, 3000);
            
        }));

        getData.then(res => setData(res));
    },[])

    
    
    return (
        <>
        <h1><ItemDetail data={data}/></h1>
            
        </>
    );
};


export default ItemDetailContainer;
