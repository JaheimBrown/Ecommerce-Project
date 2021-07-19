import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './Style';

const products = [
    { id: 1, name: 'Shoes', description: 'running shoes.', price: '$50', image: 'https://www.famousfootwear.ca/blob/product-images/21000/70/96/40/709640_pair_large.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$150', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000' }, 
    { id: 3, name: 'Laptop', description: 'Razor Blade 15 2021.', price: '$250', image: 'https://m.media-amazon.com/images/I/71K7P66CGnL._AC_SL1500_.jpg' },
    { id: 4, name: 'Iphone', description: 'Apple Iphone 12 Pro', price: '$75', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000' }
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
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
