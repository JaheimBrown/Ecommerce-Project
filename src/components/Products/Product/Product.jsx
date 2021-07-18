import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './Styles';

const Product = ({product}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography varient='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography varient='h5'>
                        {product.price}
                    </Typography>
                    <Typography varient='h2' color='textSecondary'>
                        {product.description}
                    </Typography>
                    <CardActions disabledSpacing className={classes.cardActions}>
                        <IconButton aria-label='Add to Cart'>
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    )
}

export default Product;
