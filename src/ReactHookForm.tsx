import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(2),
  },
}));

function ReactHookForm() {
  const classes = useStyles();
  const {
    errors,
    register,
    handleSubmit,
    watch,
    control,
    getValues,
    setValue,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      buildYup(jsonSchema, jsonSchemaConfig).concat(validationSchema)
    ),
    defaultValues: {
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
    } as any,
  });
  const values = getValues();

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
      <form
        noValidate
        className={classes.form}
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='firstName'
          label='First Name'
          name='firstName'
          error={Boolean(errors.firstName)}
          helperText={errors.firstName && errors.firstName.message}
        />
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='lastName'
          label='Last Name'
          name='lastName'
          error={Boolean(errors.lastName)}
          helperText={errors.lastName && errors.lastName.message}
        />
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='email'
          label='Email Address'
          name='email'
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
        />
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='emailConfirmation'
          label='Email Address Confirmation'
          name='emailConfirmation'
          error={Boolean(errors.emailConfirmation)}
          helperText={
            errors.emailConfirmation && errors.emailConfirmation.message
          }
        />
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='password'
          label='Password'
          name='password'
          type='password'
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password.message}
        />
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='passwordConfirmation'
          label='Password Confirmation'
          name='passwordConfirmation'
          type='password'
          error={Boolean(errors.passwordConfirmation)}
          helperText={
            errors.passwordConfirmation && errors.passwordConfirmation.message
          }
        />

        <FormControl variant='outlined' error={Boolean(errors.country)}>
          <InputLabel htmlFor='country'>Country</InputLabel>
          <Controller
            control={control}
            name='country'
            as={
              <Select native labelId='country'>
                <option value={'MA'}>Morocco</option>
                <option value={'ALG'}>Algeria</option>
                <option value={'EGP'}>Egypt</option>
              </Select>
            }
          />
          <FormHelperText>
            {errors.country && errors.country.message}
          </FormHelperText>
        </FormControl>
        <TextField
          required
          fullWidth
          inputRef={register}
          variant='outlined'
          id='price'
          label='Price'
          name='price'
          type='number'
          defaultValue={0}
          error={Boolean(errors.price)}
          helperText={errors.price && errors.price.message}
        />
        <FormControlLabel
          control={<Checkbox inputRef={register} name='hasPhone' />}
          label='Do you have phone number?'
        />
        <Controller
          control={control}
          name='phoneNumber'
          as={
            <MuiPhoneNumber
              defaultCountry={'ma'}
              variant='outlined'
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber && errors.phoneNumber.message}
              disabled={!watch('hasPhone')}
            />
          }
        />
        <Button type='submit' fullWidth variant='contained' color='primary'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ReactHookForm;
