import { useState, useContext } from "react";
import CartContext from "./CartContext";
import Cart from "./Cart";

export default function ProductList() {
    const { items, addItem, removeItem } = useContext(CartContext);
    const [productName, setProductName] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (productName) {
            const newItem = { name: productName };
            addItem(newItem);
        }
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <form onSubmit={handleAddItem}>
                <input 
                    type="text" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)} 
                    placeholder="Nombre del producto"
                />
                <button type="submit">Agregar al carrito</button>
            </form>
            <Cart items={items} removeItem={removeItem} />
        </div>
    );
}
