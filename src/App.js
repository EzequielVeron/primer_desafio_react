import NavBar from "./components/NavBar";
import  "./app/styles.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemdetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import MostrarCarrito from "./components/MostrarCarrito";
import ItemCount from "./components/itemCount/index";
import Item from "./components/item";
import {BrowserRouter, Routes, Route } from "react-router-dom";




const App =() => {
 
    return( 
      <>
    <BrowserRouter>
      <NavBar/>
      <ItemCount/>
      <Routes> 
      
      </Routes>
      <MostrarCarrito/>
    
    

      </BrowserRouter>
      </>
    )
;}

export default App;
