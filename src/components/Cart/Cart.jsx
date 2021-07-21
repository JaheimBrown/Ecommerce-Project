import React from 'react';
import { Grid, Typography, Button, Container } from '@material-ui/core';

import useStyle from './style';
import CartItem from './CartItem/CartItem';

const Cart = ({cart}) => {
    const classes = useStyle();
    const EmptyCart = () => (
        <Typography variant="subtitle1">You Have No Items In Your Cart, Start Adding Some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                { cart.line_items.map((item) => (
                    <Grid item xs={12} sm={3}  key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        SubTotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div> 
                        <Button className={classes.emptyButton} size="large" color="secondary" type="button" variant="contained">Empty Cart</Button>
                        <Button className={classes.ckeckoutButton} size="large" color="primary" type="button" variant="contained">Checkout</Button>
                    </div>
            </div>
        </>
    );  

    if (!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart/> }
        </Container>
    )
}

export default Cart;
