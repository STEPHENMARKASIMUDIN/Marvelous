import React, { Component } from 'react'
import {
    LinearProgress, DialogActions,
    Dialog, DialogTitle, DialogContent, Typography, Button,
    ListItem, ListItemText
} from '@material-ui/core'
import { withContext } from './Context'
import '../css/netflix.css'
export const Modal = (
    <Dialog
        style={{ display: 'none' }}
        open={true}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="dialog"
    >
        <DialogTitle id="alert-dialog-slide-title" style={{ height: '33px', width: '400px', textAlign: 'center' }}>
            <Typography component="h1" variant="subtitle2" style={{ fontWeight: 'bold' }} >
                Please wait...
            </Typography>
        </DialogTitle>
        <DialogContent>
            <div style={{ display: 'initial', flexGrow: 1 }} id='progressBar'>
                <LinearProgress color="secondary" />
            </div>
        </DialogContent>
    </Dialog>
)

export default withContext(class Confirmation extends Component {
    render() {

        const handleConfirmation = (confirm) => {
            if (confirm) {
                this.props.logout()
            } else {
                let confirmDialog = document.getElementById('confirmation')
                confirmDialog.style.display = 'none'
            }
        }

        return (
            <Dialog
                style={{ display: 'none', float: 'left', marginTop: '432px', marginLeft: '-840px' }}
                open={true}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                id="confirmation"
            >
                <DialogTitle id="alert-dialog-slide-title" style={{ height: '33px', width: '235px', textAlign: 'left' }}>
                    <Typography component="h1" variant="subtitle2" style={{ fontWeight: 'lighter' }} >
                        System Message
                      </Typography>
                </DialogTitle>
                <DialogContent style={{ marginTop: '17px', marginLeft: '5px', fontWeight: 'bold' }}>
                    Are you sure you want to quit?
                 </DialogContent>
                <DialogActions>
                    <Button onClick={() => { handleConfirmation(false) }} style={{ backgroundColor: 'crimson', color: 'white', height: '30px', padding: '2px' }}>
                        No
                     </Button>
                    <Button onClick={() => { handleConfirmation(true) }} style={{ backgroundColor: 'darkgreen', color: 'white', height: '30px', padding: '2px' }}>
                        Yes
                     </Button>
                </DialogActions>
            </Dialog>
        )
    }
})
const handleAlert = () => {
    let alertDialog = document.getElementById('alertDialog')
    alertDialog.style.display = 'none'
}
export const AlertModal = (
    <Dialog
        style={{ display: 'none' }}
        open={true}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="alertDialog"
    >
        <DialogTitle id="alert-dialog-slide-title" style={{ height: '30px', width: '266px', textAlign: 'center' }}>
            <Typography component="h1" variant="subtitle2" style={{ fontWeight: 'bold' }} >
                Please provide your credentials. Thank you!
            </Typography>
        </DialogTitle>
        <DialogActions>
            <Button onClick={() => { handleAlert() }} style={{ backgroundColor: 'crimson', color: 'white', height: '22px', padding: '0px', marginTop: '15px' }}>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
)

const handleCredentials = (id) => {
    let credDialog = document.getElementById(id)
    credDialog.style.display = 'none'
}
export const invalidCred = (
    <Dialog
        style={{ display: 'none' }}
        open={true}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="invalidCred"
    >
        <DialogTitle id="alert-dialog-slide-title" style={{ height: '30px', width: '266px', textAlign: 'center' }}>
            <Typography component="h1" variant="subtitle2" style={{ fontWeight: 'bold' }} >
                Invalid Credentials!
            </Typography>
        </DialogTitle>
        <DialogActions>
            <Button onClick={() => { handleCredentials('invalidCred') }} style={{ backgroundColor: 'crimson', color: 'white', height: '22px', padding: '0px', marginTop: '15px' }}>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
)
export const errorOccurred = (
    <Dialog
        style={{ display: 'none' }}
        open={true}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        id="errorOccurred"
    >
        <DialogTitle id="alert-dialog-slide-title" style={{ height: '30px', width: '266px', textAlign: 'center' }}>
            <Typography component="h1" variant="subtitle2" style={{ fontWeight: 'bold' }} >
                Something Went Wrong!
            </Typography>
        </DialogTitle>
        <DialogActions>
            <Button onClick={() => { handleCredentials('errorOccurred') }} style={{ backgroundColor: 'crimson', color: 'white', height: '22px', padding: '0px', marginTop: '15px' }}>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
)

export class NetflixPop extends Component {


    render() {

        return (
            <div className="dropdown-content">
                <ListItem button onClick={() => { this.props.onClick(12) }}>
                    <ListItemText primary="Brooklyn Nine Nine" />
                </ListItem>
                <ListItem button onClick={() => { this.props.onClick(13) }}>
                    <ListItemText primary="Kingdom" />
                </ListItem>
                <ListItem button onClick={() => { this.props.onClick(14) }}>
                    <ListItemText primary="Lucifer" />
                </ListItem>
                <ListItem button onClick={() => { this.props.onClick(15) }}>
                    <ListItemText primary="Stranger Things" />
                </ListItem>

            </div>

        )
    }
}
