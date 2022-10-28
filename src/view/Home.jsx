import React, { useState, useEffect } from "react";

import ItemSection from "../components/ItemSection";

import { Layout } from "../components/";

import getItems  from "../functions/getProductById";
import ItemCount from "../components/ItemCount";



export const Home = () =>{
const [productos, setProductos] = useState (null);

useEffect(() =>{
    async function getProducts() {
        const product = await getItems();
        setProductos(product)
    }
    getProducts();
    }, [])

return (
    <Layout>
<ul>
    {productos ? productos.map(p=><li key={p.id} >{p.name}</li>
    ) : null  }
</ul>;
    <ItemCount/>
    </Layout>

);
}

export default Home;

