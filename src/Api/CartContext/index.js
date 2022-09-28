import { createContext, useContext, useState } from "react";


const CartContext= createContext();

export const {Provider} = CartContext;

export const useCartContext = () => useContext(CartContext);

const CustomProvider = ({children}) =>{
    const [TotalPrice, setTotalPrice]= useState(0);
    const [TotalQuantity, setTotalQuantity]= useState(0);
    const [cart, setCart] = useState([]);
    const addToCart= (product, quantity)=> {
        setTotalQuantity(TotalQuantity+quantity);
        setTotalPrice(TotalPrice+product.price*quantity);
    setCart([...cart, {...product, quantity: quantity}]);
    if (IsInCart(product.id)) {
        const newCart = cart.map((item)=> {
            if (item.id === product.id) {
                return{...item, quantity: item.quantity + quantity};
            } else{
                return item;
            }
        });
        setCart(newCart);
    }  else{
        setCart( [...cart, {...product, quantity: quantity}]);
    }

    };

    const IsInCart=(id) =>{
        return cart.find((product)=>product.id === id);
    }
    const removeItem= (item) =>{
        setTotalPrice(TotalPrice-item.quantity*item.price);
        setTotalQuantity(TotalQuantity-item.quantity);
        const newCart=cart.filter((product)=> product.id !== removeItem);
        setCart(newCart);
    };

    const valorDelContexto = {cart, addToCart, TotalQuantity, TotalPrice, removeItem};
    
    return <Provider value={valorDelContexto} >{children}</Provider>

}

export default CustomProvider