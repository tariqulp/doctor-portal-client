import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, SetLoginData] = useState({})
    const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ m: 5 }} variant="body1" gutterBottom>LOGIN</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            label="Your Email"
                            variant="standard"
                            onChange={handleOnChange}
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic2"
                            name="password"
                            type="password"
                            label="Your Password"
                            variant="standard"
                            onChange={handleOnChange}
                        />
                        <Button type="submit" variant="contained" style={{ backgroundColor: '#5BE0EF', width: '75%', m: 1 }}>Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to='/register'><Button variant="text">New User? Please Register</Button></NavLink>
                        {isLoading && <CircularProgress color="success" />}
                        {user?.email && <Alert severity="success">Login successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>}
                    <p>------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" >Google SignIn</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;