import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './Styles';

const Product = ({product, AddToCart}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography varient='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography varient='h3'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                    <Typography dangerouslySetInnerHTML={{__html:product.description}} varient='body2' color='textSecondary'/>
                    <CardActions className={classes.cardActions}>
                        <IconButton aria-label='Add to Cart' onClick={du => AddToCart(product.id, 1)}>
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>
            </CardContent>
        </Card>
    )
}

export default Product;
