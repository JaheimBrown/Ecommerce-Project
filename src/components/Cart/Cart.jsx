import React from 'react';
import { Grid, Typography, Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyle from './style';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleEmptyCart, handleRemoveFromCart, handleUpdateCart }) => {
    const classes = useStyle();
    const EmptyCart = () => (
        <Typography variant="subtitle1">You Have No Items In Your Cart,  
        <Link to='/' className={classes.link}>Start Adding Some</Link>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                { cart.line_items.map((item) => (
                    <Grid item xs={12} sm={3}  key={item.id}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCart={handleUpdateCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        SubTotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div> 
                        <Button className={classes.emptyButton} size="large" color="secondary" type="button" variant="contained" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                        <Button className={classes.ckeckoutButton} size="large" color="primary" type="button" variant="contained" component={Link} to='/checkout'>Checkout</Button>
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
