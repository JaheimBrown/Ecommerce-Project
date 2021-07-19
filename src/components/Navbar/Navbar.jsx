import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import Logo from '../../assets/favicon.ico';
import useStyle from './Style';

const Navbar = () => {
    const classes = useStyle();

    return (
        <>
            <AppBar position='fixed' className={classes.appbar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' color='inherit' className={classes.title}>
                        <img src={Logo} alt='JBCommerce' height='25px' className={classes.image}/>
                        JBCommerce
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.button}>
                        <IconButton aria-label='Show Cart Items' color='inherit'>
                            <Badge badgeContent={3} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
