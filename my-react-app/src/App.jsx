import React, { useState } from 'react';
import './Store/store.css'; // Import CSS file

function Product({ name, description, addToCart }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => addToCart(name)}>Add to Cart</button>
    </div>
  );
}

function Cart({ items, checkout }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const checkout = () => {
    alert('Thank you for your purchase!');
    setCartItems([]);
  };

  return (
    <div className="App">
      <header>
        <h1>Font & Theme Store</h1>
      </header>
      <div className="container">
        <div className="sidebar">
          <div className="user-details">
            <h2>User Details</h2>
          </div>
          <nav className="navigation">
            <h2>Navigation</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Fonts</a></li>
              <li><a href="#">Themes</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="products">
          <Product name="Font 1" description="Description of Font 1" addToCart={addToCart} />
          <Product name="Font 2" description="Description of Font 2" addToCart={addToCart} />
          <Product name="Font 3" description="Description of Font 3" addToCart={addToCart} />
          <Product name="Font 4" description="Description of Font 4" addToCart={addToCart} />
          <Product name="Font 5" description="Description of Font 5" addToCart={addToCart} />
          <Product name="Font 6" description="Description of Font 6" addToCart={addToCart} />
          <Product name="Font 7" description="Description of Font 7" addToCart={addToCart} />
          <Product name="Font 8" description="Description of Font 8" addToCart={addToCart} />
          <Product name="Font 9" description="Description of Font 9" addToCart={addToCart} />
          <Product name="Font 10" description="Description of Font 10" addToCart={addToCart} />
          <Product name="Font 11" description="Description of Font 11" addToCart={addToCart} />
          <Product name="Font 12" description="Description of Font 12" addToCart={addToCart} />
          <Product name="Font 13" description="Description of Font 13" addToCart={addToCart} />
          <Product name="Font 14" description="Description of Font 14" addToCart={addToCart} />
          <Product name="Font 15" description="Description of Font 15" addToCart={addToCart} />
          <Product name="Font 16" description="Description of Font 16" addToCart={addToCart} />
          {/* Add more Product components here for additional fonts */}
        </div>
        <Cart items={cartItems} checkout={checkout} />
      </div>
    </div>
  );
}

export default App;
