import { useState } from "react";

function Project4() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemExists = cart.find((item) => item.id === product.id);

    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>SmartCart</h1>

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <hr />
        </div>
      ))}

      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ₹{item.price}
            </p>

            <button onClick={() => decreaseQty(item.id)}>
              -
            </button>

            <span> {item.quantity} </span>

            <button onClick={() => increaseQty(item.id)}>
              +
            </button>

            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>

            <hr />
          </div>
        ))
      )}

      <h2>Total Price: ₹{totalPrice}</h2>
    </div>
  );
}

export default Project4;