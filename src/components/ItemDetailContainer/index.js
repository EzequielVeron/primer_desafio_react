import React, {useEffect, useState} from "react";
import {productos} from "../../Api/productos"; 
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () =>{
    const[product, setProduct]= useState({});
    const [loading, setLoading]= useState(true);
    const {productId} = useParams();

    useEffect(() =>{
        const getProducts = new Promise ((resolve, reject) =>{
            setTimeout(()=>{
            resolve(productos);
            }, 3000);
        });

        getProducts.then ((result) => {
            const prodfiltered = result.filter((prod) => prod.id === productId);
            setProduct(prodfiltered[0]);
            setLoading(false);
        });
    }, [productId]);
    return loading ? <p>cargando...</p> : <ItemDetail product={product} />;
};


export default ItemDetailContainer;

