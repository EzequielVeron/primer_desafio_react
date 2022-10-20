import { db } from "../Firebase/credenciales";
import { collection, getDocs, query, where } from "firebase/firestore";

export default async function getActiveProducts () {

  const collectionRef = collection(db, "Products");
  const filtrarActivos = query(collectionRef, where("active", "==", true));
  const snaps = await getDocs(filtrarActivos);
  const productos = [];


  // ciclo asíncrono para obtener los precios junto con la descripción del producto
  for await (const snap of snaps.docs) {
    const productos = snap.data();
    productos.id = snap.id;
    const precioSnaps = await getDocs(collection(snap.ref, "price"));
    productos.price = precioSnaps.docs[0].data();
    productos.priceId = precioSnaps.docs[0].id;
    productos.push(productos);
}

return productos;
}
