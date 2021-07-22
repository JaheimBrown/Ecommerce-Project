import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../../assets/favicon.ico';
import useStyle from './Style';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ( { totalItems }) => {
    const classes = useStyle();
    const location = useLocation();

    return (
        <>
            <AppBar position='fixed' className={classes.appbar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to='/' variant='h6' color='inherit' className={classes.title}>
                        <img src={Logo} alt='JBCommerce' height='25px' className={classes.image}/>
                        JBCommerce
                    </Typography>
                    <div className={classes.grow}></div>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label='Show Cart Items' color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
