
export default function Cart({ items, removeItem }) {
    return (
        <div>
            <h2>Carro de la compra</h2>
            {items.map((item, index) => (
                <div key={index}>
                    <span>{item.name}</span>
                    <button onClick={() => removeItem(item)}>Sacar del carrito</button>
                </div>
            ))}
        </div>
    );
}