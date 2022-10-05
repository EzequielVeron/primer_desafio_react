
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "./application/Firebaseconfig";
import Home from "./components/Home";
import Login from "./components/Login";
import React,{useState} from 'react';


import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/index';
import CartProvider from './CartContext/index';
import Cart from './components/Cart/Cart';
function App() {
  const [usuario, setUsuario] = useState(null)
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
            <Route path='/producto/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
      <div className="" >
        { usuario ? <Home/> : <Login/>}
      </div>
    </>
  );
}

export default App;
