import React, {useState, useEffect} from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInput';
import { commerce } from '../lib/Commerce';

const AddressForm = ({ checkoutToken }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubDivisions, setShippingSubDivisions] = useState([]);
    const [shippingSubDivision, setShippingSubDivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label:name}));

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListCountries(checkoutTokenId);
        console.log(countries);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);

    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken. id);
    }, [])

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
                        <Select value={shippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                            {countries.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
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
                    </Grid> */}
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm;
