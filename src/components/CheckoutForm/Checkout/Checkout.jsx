import React, {useState, useEffect} from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button  } from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyle from './style';

import { commerce } from '../../lib/Commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const Checkout = ({cart, handleCaptureCheckout, order, refreshCart}) => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Shipping Address', 'Payment Details'];
    const [shippingData, setShippingData] =useState({});
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [isFinished, setIsFinished] = useState(false);
    const classes = useStyle();

    useEffect(() => {
        const generateToken = async ()  => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: "cart"});
                setCheckoutToken(token);
            } catch (error) {
                
            }
        }
        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1); 
    const prevStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1); 

    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    }

    let Confirmation = () => (order.customer ? (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
        </>
      )  : isFinished ? (
        <>
        <div>
          <Typography variant="h5">Thank you for your purchase!</Typography>
          <Divider className={classes.divider} />
        </div>
        <br />
        <Button onClick={()=>refreshCart()} component={Link} variant="outlined" type="button" to="/">Back to home</Button>
      </>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ));

    const Form = () => activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken}  next={next} /> 
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} handleCaptureCheckout={handleCaptureCheckout} nextStep={nextStep} prevStep={prevStep} timeout={timeout} />;

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
