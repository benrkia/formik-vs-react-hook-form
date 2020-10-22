import React, { useEffect } from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DevTool } from '@hookform/devtools';
import { jsonSchema, validationSchema, jsonSchemaConfig } from './utils';
import { buildYup } from 'json-schema-to-yup';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    margin: theme.spacing(2, 0),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const { errors, register, handleSubmit, reset, control } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(
      validationSchema.concat(buildYup(jsonSchema, jsonSchemaConfig))
    ),
  });

  console.log('new render');

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const data = await new Promise<any>((resolve) => {
  //       setTimeout(
  //         () => resolve({ firstName: 'ilyasse', lastName: 'benrkia' }),
  //         2000
  //       );
  //     });
  //     reset(data);
  //   };

  //   fetchUserData();
  // }, [reset]);

  return (
    <div className='App'>
      <DevTool control={control} />
      <Container component='main' maxWidth='lg'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' className={classes.title} variant='h5'>
            React Hook Form
          </Typography>
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
                errors.passwordConfirmation &&
                errors.passwordConfirmation.message
              }
            />
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default App;
