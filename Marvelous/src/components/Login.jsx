import React, { Component } from 'react'
import '../css/layout.css'
import {
    Avatar, Button, CssBaseline, TextField
    , Box, Typography, Container, withStyles, IconButton, InputAdornment,
    LinearProgress, Dialog, DialogTitle, DialogContent
} from '@material-ui/core'
import { LocalMovies, Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons'
import { useStyles } from '../higher-order/loginStyles'
import { Modal, AlertModal, invalidCred, errorOccurred } from './Dialogs'
import { withContext } from './Context'
import { PostAxios } from '../logic/Axios'
const HaveFun = () => {
    return (
        <Typography variant="subtitle2" color="textSecondary" align="center" style={{ color: 'black', marginTop: '-31px' }}>
            {'Have Fun!'}
        </Typography>
    )
}

export default withContext(withStyles(useStyles)(class Login extends Component {
    constructor() {
        super()
        this.state = {
            userid: '',
            password: '',
            showPassword: false,
            loader: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const alertD = document.getElementById('alertDialog')
        const invalid = document.getElementById('invalidCred')
        const serverError = document.getElementById('errorOccurred')
        const userid = this.state.userid
        const password = this.state.password
        if (!userid || !password) {

            alertD.style.display = 'initial'
        }
        else {

            const showDialog = document.getElementById('dialog')
            showDialog.style.display = 'initial'
            const data = {
                userid: userid,
                password: password
            }
            const response = await PostAxios(data)
            try {
                switch (parseInt(response.statusCode)) {
                    case 200:
                        setTimeout(() => {
                            showDialog.style.display = 'none'
                            const userData = {
                                isAuthentic: true,
                                firstname: response.result.fname,
                                lastname: response.result.lname,
                            }
                            localStorage.setItem('userData', JSON.stringify(userData))
                            this.props.handleAuth(true)
                        }, 1000)
                        break;
                    case 500:
                        setTimeout(() => {
                            showDialog.style.display = 'none'
                            serverError.style.display = 'initial'
                        }, 1000)
                        break;
                    case 401:
                        setTimeout(() => {
                            showDialog.style.display = 'none'
                            invalid.style.display = 'initial'
                        }, 1000)
                        break;
                    default:
                        break;
                }
            } catch (error) {
                setTimeout(() => {
                    showDialog.style.display = 'none'
                    alert(error)
                }, 1000)
            }



        }
    }
    handleClickShowPassword = () => {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword
        })
    };
    componentDidUpdate() {
        if (this.props.isAuthentic) {
            this.props.history.push('/home');

        }
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            loader: true
        })
        const userData = localStorage.getItem('userData')
        const containerID = document.getElementById("mainContainer")
        const splash = document.getElementById("splash")
        if (userData) {
            const data = JSON.parse(userData)
            if (data.isAuthentic) {
                this.props.history.push('/home')
            }
        }

        setTimeout(() => {
            this.setState({
                ...this.state,
                loader: false
            })
            splash.style.display = "none"
            containerID.style.visibility = "visible"
        }, 1500)


    }
    // onInput = {(e) => {
    //     e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 8)
    // }}
    render() {

        const { classes } = this.props;

        return (
            <>
                <Container component="main" maxWidth="xs" id="splash" style={{ display: 'inherit' }}>
                    <Dialog
                        open={this.state.loader}
                        keepMounted
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"

                    >
                        <DialogTitle id="alert-dialog-slide-title" style={{ height: '33px', width: '400px', textAlign: 'center' }}>
                            <Typography component="h1" variant="subtitle2" style={{ fontWeight: 'bold' }} >
                                Welcome to Marvelous Site!
                             </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <div style={{ display: 'initial', flexGrow: 1 }} id='progressBar'>
                                <LinearProgress color="secondary" />
                            </div>
                        </DialogContent>
                    </Dialog>
                </Container>
                <Container component="main" maxWidth="xs" id="mainContainer" style={{ visibility: 'hidden' }}>
                    <CssBaseline />
                    <div id="modalHere">
                        {Modal}
                        {AlertModal}
                        {errorOccurred}
                        {invalidCred}
                    </div>
                    <div className={classes.paper} >
                        <div style={{ display: 'inline-block', marginTop: '-40px' }}>
                            <Avatar className={classes.avatar}>
                                <LocalMovies />
                            </Avatar>
                        </div>

                        <Typography component="h1" variant="h5">
                            Login
                       </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit} id="loginForm" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="userid"
                                label="User ID"
                                name="userid"
                                autoComplete="userid"
                                autoFocus
                                onChange={this.handleChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                                onInput={(e) => {
                                    e.target.value = e.target.value.toString().slice(0, 12)
                                }}
                                style={{ textTransform: "uppercase" }}

                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handleChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}

                                style={{ textTransform: "uppercase" }}

                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                style={{ marginTop: '18px' }}
                                id="btnSubmit"
                            >
                                Login
                         </Button>

                        </form>
                        <Box mt={5}>
                            <HaveFun />
                        </Box>
                    </div>

                </Container >
            </>
        )
    }
}))