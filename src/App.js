import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CustomProvider from "./Api/CartContext";
import CartWidget from "./CartWidget";











const App =() => {

    return( 
      <>
      <CustomProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/productos" element={<ItemListContainer/>} />
      <Route path="/categorias/:categoryid" element={<ItemListContainer/>} />
      <Route path="/producto/:productId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<CartWidget/>}/>
      </Routes>
      
      
      
      
      </BrowserRouter>
      </CustomProvider>
      </>
    )
;}

export default App;
