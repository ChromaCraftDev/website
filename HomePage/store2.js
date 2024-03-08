function addToCart(product) {
    // Add product to cart
    var cartItems = document.getElementById('cartItems');
    var li = document.createElement('li');
    li.textContent = product;
    cartItems.appendChild(li);
  }
  
  function checkout() {
    // Process checkout
    alert('Thank you for your purchase!');
    // Clear cart
    document.getElementById('cartItems').innerHTML = '';
  }
  