import React, {useState, useEffect}from "react";
import { productos } from "../Api/productos";
import ItemList from "./ItemList";
import { useParams } from "react-router";




const ItemListContainer = () =>{
const [products, setProducts] = useState([]);
const [Loading, setLoading] = useState(true);
const {categoryid} = useParams();


useEffect(() => {
        const getProducts = new Promise ((resolve) =>{
            setTimeout(()=>{
            resolve(productos);
            }, 3000);
        });

        getProducts.then ((result) => {
            if (categoryid) {
            const prodFiltered = result.filter((prod) => prod.category === categoryid);
            setProducts(prodFiltered);
            } else{
                setProducts(result)
            }
            setLoading(false);
        });
        return () =>{
            setLoading(true);
        };
}, [categoryid]);




return Loading ? <p>LOADING...</p> : <ItemList products={products} />;
};

export default ItemListContainer;