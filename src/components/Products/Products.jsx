import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'shoes', description: 'running shoes.', price: '$50' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$150' }, 
    { id: 3, name: 'Laptop', description: 'Razor Blade 15 2021.', price: '$250' }
]

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
