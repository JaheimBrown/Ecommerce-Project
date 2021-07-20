import React, { useState, useEffect } from 'react';
import { commerce } from './components/lib/Commerce';
import { Navbar, Products } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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
      console.log(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[])

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} AddToCart={handleAddToCart}/>
    </>
  );
}

export default App;
