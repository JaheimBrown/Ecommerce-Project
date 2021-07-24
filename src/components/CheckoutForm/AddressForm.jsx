import React, {useState} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInput';
import { commerce } from '../lib/Commerce';

const AddressForm = () => {
    const [shippingCountries, SetShippingCountries] = useState([]);
    const [shippingCountry, SetShippingCountry] = useState('');
    const [shippingSubDivisions, SetShippingSubDivisions] = useState([]);
    const [shippingSubDivision, SetShippingSubDivision] = useState('');
    const [shippingOptions, SetShippingOptions] = useState([]);
    const [shippingOption, SetShippingOption] = useState('');
    const methods = useForm();

    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First name' required />
                        <FormInput name='lastName' label='Last name' required />
                        <FormInput name='address1' label='Address' required />
                        <FormInput name='email' label='Email' required />
                        <FormInput name='city' label='City' required />
                        <FormInput name='zip' label='Zip / Postal code' required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivisions</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select Me
                            </MenuItem>
                        </Select>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm;
