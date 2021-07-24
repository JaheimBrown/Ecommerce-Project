import React, {useState, useEffect} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button  } from '@material-ui/core';
import useStyle from './style';

import { commerce } from '../../lib/Commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const Checkout = ({cart}) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Shipping Address', 'Payment Details'];
    const [checkoutToken, setCheckoutToken] = useState(null);
    const classes = useStyle();

    useEffect(() => {
        const generateToken = async ()  => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});
                setCheckoutToken(token);
            } catch (error) {
                
            }
        }
        generateToken();
    }, [cart])

    const Confirmation = () => (
        <div>
            CONFIRMATION
        </div>
    );

    const Form = () => activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken} /> : <PaymentForm />;

    return (
        <>
         <div className={classes.toolbar} />
         <main className={classes.layout}>
             <Paper className={classes.paper}>
                 <Typography variant='h4' align="center">Checkout</Typography>
                 <Stepper activeStep={activeStep} className={classes.stepper} >
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                 </Stepper>
                 {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
             </Paper>
         </main>
        </>
    )
}

export default Checkout;
