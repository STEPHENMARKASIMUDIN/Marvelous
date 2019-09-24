import React, { Component } from 'react'
import { CircularProgress, Container } from '@material-ui/core';
export default class SplashScreen extends Component {
    componentDidMount() {

        if (this.props.isAuthentic) {
            this.props.history.push('/home');
        }
        setTimeout(() => {
            this.props.history.push('/login')
        }, 2000)
    }
    render() {
        return (
            <Container component="main" maxWidth="xs" >

                <div>
                    <CircularProgress color="secondary" />
                </div>
            </Container>
        )
    }
}