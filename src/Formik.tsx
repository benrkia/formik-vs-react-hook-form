import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { jsonSchema, validationSchema, jsonSchemaConfig } from './utils';
import { buildYup } from 'json-schema-to-yup';
import { useCounter } from './hooks';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  Select,
} from '@material-ui/core';
import MuiPhoneNumber from 'material-ui-phone-number';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(2),
  },
}));

function Formik() {
  const classes = useStyles();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
      country: 'MA',
      price: 0,
      hasPhone: false,
      phoneNumber: '',
    },
    onSubmit: (data) => alert(JSON.stringify(data)),
    validationSchema: buildYup(jsonSchema, jsonSchemaConfig).concat(
      validationSchema
    ),
  });

  const [count] = useCounter();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          background: '#607D8B',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5em',
          fontWeight: 'bold',
          borderRadius: '100%',
        }}
      >
        {count}
      </div>
      <form noValidate className={classes.form} onSubmit={handleSubmit}>
        <TextField
          required
          fullWidth
          variant='outlined'
          id='firstName'
          label='First Name'
          name='firstName'
          onChange={handleChange}
          value={values.firstName}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          id='lastName'
          label='Last Name'
          name='lastName'
          onChange={handleChange}
          value={values.lastName}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          id='email'
          label='Email Address'
          name='email'
          onChange={handleChange}
          value={values.email}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          id='emailConfirmation'
          label='Email Address Confirmation'
          name='emailConfirmation'
          onChange={handleChange}
          value={values.emailConfirmation}
          error={Boolean(errors.emailConfirmation)}
          helperText={errors.emailConfirmation}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          id='password'
          label='Password'
          name='password'
          type='password'
          onChange={handleChange}
          value={values.password}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <TextField
          required
          fullWidth
          variant='outlined'
          id='passwordConfirmation'
          label='Password Confirmation'
          name='passwordConfirmation'
          type='password'
          onChange={handleChange}
          value={values.passwordConfirmation}
          error={Boolean(errors.passwordConfirmation)}
          helperText={errors.passwordConfirmation}
        />

        <FormControl variant='outlined' error={Boolean(errors.country)}>
          <InputLabel htmlFor='country'>Country</InputLabel>
          <Select
            native
            labelId='country'
            name='country'
            onChange={handleChange}
            value={values.country}
          >
            <option value={'MA'}>Morocco</option>
            <option value={'ALG'}>Algeria</option>
            <option value={'EGP'}>Egypt</option>
          </Select>
          <FormHelperText>{errors.country}</FormHelperText>
        </FormControl>
        <TextField
          required
          fullWidth
          variant='outlined'
          id='price'
          label='Price'
          name='price'
          type='number'
          onChange={handleChange}
          value={values.price}
          error={Boolean(errors.price)}
          helperText={errors.price}
        />
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              value={values.hasPhone}
              name='hasPhone'
            />
          }
          label='Do you have phone number?'
        />
        <MuiPhoneNumber
          variant='outlined'
          name='phoneNumber'
          defaultCountry={'ma'}
          onChange={handleChange}
          value={values.phoneNumber}
          error={Boolean(errors.phoneNumber)}
          helperText={errors.phoneNumber}
          disabled={!values.hasPhone}
        />
        <Button type='submit' fullWidth variant='contained' color='secondary'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Formik;
