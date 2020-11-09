import React from 'react';
import './App.css';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import ReactHookForm from './ReactHookForm';
import Formik from './Formik';

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
}));

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <Container component='main' maxWidth='lg'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' className={classes.title} variant='h5'>
            React Hook Form / Formik
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <ReactHookForm />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Formik />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
