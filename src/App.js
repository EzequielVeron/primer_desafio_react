import {  Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./view/Home";
import Carrito from "./view/Carrito";
import Producto from "./view/Producto";
import CheckOut from "./view/CheckOut";
import Perfil from "./view/Perfil";
import Login from "./view/Login";
import NotFound from "./view/NotFound";
import { auth } from "./Firebase/credenciales";
import { useUserContext } from "./contexts/userContext";
import { onAuthStateChanged } from "firebase/auth";

function App() {


  const { setUser } = useUserContext();
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) setUser(firebaseUser);
    if (!firebaseUser) setUser();
  });

  return (
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="producto/:id" element={<Producto />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="carrito" element={<Carrito />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;