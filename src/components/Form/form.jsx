// MedicineForm.jsx
import React, { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const useStyles = makeStyles({
  formContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    m: 1,
    bgcolor: 'secondary.main',
  },
  form: {
    mt: 3,
  },
});

export default function MedicineForm() {
  const classes = useStyles();
  const navigateTo = useNavigate();
  const [medicineName, setMedicineName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      medicineName,
    });
    // Add your logic here for handling the form submission
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm" className={classes.formContainer}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Medicine Form
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            className={classes.form}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="medicineName"
                  label="Medicine Name"
                  name="medicineName"
                  autoComplete="medicine-name"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
