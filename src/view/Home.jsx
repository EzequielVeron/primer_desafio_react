import React, { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";
import getActiveProducts from "../functions/getActiveProducts";
import ItemSection from "../components/ItemSection";

import { Layout } from "../components/";
import { getProductById } from "../functions";

function Home() {
const [productos, setProductos] = useState(null);

useEffect(() => {
    async function getProducts() {
    const products = await getProductById();
    setProductos(products);
console.log("productosHome", products);
    }

    getProducts();
}, []);

return (
    <Layout>
    <ItemSection title="Lo más vendido" productos={productos} />

    </Layout>
);
}

export default Home;

