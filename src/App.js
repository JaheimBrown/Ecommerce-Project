import React, { useState, useEffect } from 'react';
import { commerce } from './components/lib/Commerce';
import { Navbar, Products, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);    
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantitiy) => {
      const item = await commerce.cart.add(productId, quantitiy);
      setCart(item);
  }

  // Button Functions
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  // FIX
  const handleUpdateCart = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  }

  const handleRemoveFromCart = async (itemId) => {
    const {cart} = await commerce.cart.remove(itemId);
    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      refreshCart();
      setOrder(incomingOrder);

    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])

  useEffect(() => {
    fetchCart();
  },[cart.total_items]);

  return (
    <Router>
      <>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path='/'>
          <Products products={products} AddToCart={handleAddToCart}/>
          </Route>
          <Route exact path='/cart'>
          <Cart cart={cart}
                handleEmptyCart ={handleEmptyCart}
                handleUpdateCart ={handleUpdateCart}
                handleRemoveFromCart ={handleRemoveFromCart} />
          </Route>
          <Route exact path='/checkout'>
            <Checkout
              cart={cart}
              handleCaptureCheckout={handleCaptureCheckout}
              order={order}
              refreshCart={refreshCart}
            />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
