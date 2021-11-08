import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, SetLoginData] = useState({})
    const history = useHistory();
    const { registerUser, isLoading, user, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password did not match")
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ m: 5 }} variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="name"
                            label="Your Name"
                            variant="standard"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            type="email"
                            label="Your Email"
                            variant="standard"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic2"
                            name="password"
                            type="password"
                            label="Your Password"
                            variant="standard"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic3"
                            name="password2"
                            type="password"
                            label="ReType-Your Password"
                            variant="standard"
                            onBlur={handleOnBlur}
                        />
                        <Button type="submit" variant="contained" style={{ backgroundColor: '#5BE0EF', width: '75%', m: 1 }}>Register</Button>
                        <NavLink style={{ textDecoration: "none" }} to='/login'><Button variant="text">Already Register? Please Login</Button></NavLink>
                        {isLoading && <CircularProgress color="success" />}
                        {user?.email && <Alert severity="success">Account created successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;