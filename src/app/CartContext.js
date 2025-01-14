'use client'
import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);
    const addItem = (newItem) => setItems([...items, newItem]);
    const removeItem = (itemRemoved) => {
        setItems(items.filter(item => item !== itemRemoved));
    };
    return(
        <CartContext.Provider value={{ items, addItem, removeItem}}>
             {children}
        </CartContext.Provider>
    );
}
export default CartContext;