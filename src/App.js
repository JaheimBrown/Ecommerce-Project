import React, { useState, useEffect } from 'react';
import { commerce } from './components/lib/Commerce';
import { Navbar, Products } from './components';

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  },[])

  console.log(products);

  return (
    <>
      <Navbar/>
      <Products products={products}/>
    </>
  );
}

export default App;
