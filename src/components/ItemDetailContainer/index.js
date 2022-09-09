import ItemDetail from "../ItemDetail/ItemDetail";
import React, {UseEffect, UseState} from "react";


const film = { id:1, Image:"../components/app/img/relleno_bonobon.jpg", tittle:"pasta bonobon"};



export const ItemdetailContainer = () => {
    const [data, setData] = UseState ({});

    UseEffect (() =>{
        const GetData = new Promise((resolve => {
            setTimeout(()=>{
                resolve(film);
            }, 3000);
            
        });

        GetData.then(res => setData(res));
    },[])
    
    return (
            <h1>ItemDetail data={data}</h1>

    );
}


export default ItemdetailContainer;