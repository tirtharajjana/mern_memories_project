import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyle from './styles'
import Input from './Input';
import Icon from './icon';

const Auth = () => {
    const classes = useStyle();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handelSubmit = () => {

    }

    const handelChange = () => setShowPassword((prevShowPassword) => !prevShowPassword)
    const handelShowPassword = () => {

    }
    const switchMode = () => {
        setIsSignUp((prevIsSignup) => !prevIsSignup);
        handelShowPassword(false);
    }
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () => {
        console.log("Gppgle Sign In unseccessful. Try again later");
    }

    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.paper} elevation={3} >
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5"  >{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handelSubmit} >
                    <Grid container spacing={2} >
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handelChange={handelChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handelChange={handelChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handelChange={handelChange} type="email" />
                        <Input name="password" label="Password" handelChange={handelChange} type={showPassword ? "text" : "password"} handelShowPassword={handelShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handelChange={handelChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="896903092557-7g9q4eg3uh54chac5ke7crjjbvfv86mv.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained" >Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end" >
                        <Grid item >
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
