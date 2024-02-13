import React from 'react';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#f1f3f4', // Background color similar to Google Forms
    borderRadius: theme.spacing(2), // Rounded corners
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submitWrapper: {
    marginTop: theme.spacing(4), // Adjust this value to place the button further down
  },
  submit: {
    margin: theme.spacing(3, 0, 2), // Original margin style for the button
    backgroundColor: '#1a73e8', // Button color similar to Google Forms
    '&:hover': {
      backgroundColor: '#0f62fe', // Button color on hover
    },
  },
}));

export default function MedicineForm() {
  const classes = useStyles();
  const navigateTo = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const medicineName = event.target.elements.medicineName.value;
    console.log("Medicine Name:", medicineName);
    navigateTo('/LandingPage');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Medicine Names
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="medicineName"
              label="Medicine Name"
              name="medicineName"
              autoComplete="medicineName"
              autoFocus
            />
            <div className={classes.submitWrapper}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
