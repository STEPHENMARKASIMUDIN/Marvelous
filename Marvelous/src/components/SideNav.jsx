import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import {
    StarBorder, EventSeat, LiveTv, ChevronRight,
    GroupWork, PowerSettingsNew, Theaters, SupervisorAccount,
} from '@material-ui/icons';

import Confirmation from './Dialogs'
import { NetflixPop } from './Dialogs'
import '../css/netflix.css'
export default class SideNav extends Component {
    constructor() {
        super()
        this.handleConfirm = this.handleConfirm.bind(this)
    }
    handleConfirm = () => {
        let confirmDialog = document.getElementById('confirmation')
        confirmDialog.style.display = 'initial'

    }

    render() {

        return (
            <div >
                <Confirmation />
                <ListItem button onClick={() => { this.props.handleChange(0) }}>
                    <ListItemIcon>
                        <StarBorder color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Marvel" />
                </ListItem>
                <ListItem button className="dropdown" style={{ height: '50px' }}>
                    <ListItemIcon style={{ marginRight:'-18px'}}>
                        <LiveTv color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Netflix & Chill" className="dropbtn" />
                    <ChevronRight color="secondary" />
                    <NetflixPop onClick={this.props.handleChange} />
                </ListItem>

                <ListItem button onClick={() => { this.props.handleChange(11) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="X-Men" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(1) }}>
                    <ListItemIcon>
                        <EventSeat color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Game of Thrones" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(2) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="True Story" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(3) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Keanu Reeves" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(6) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="James Bond" />
                </ListItem>
                 <ListItem button onClick={() => { this.props.handleChange(16) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Jason Statham" />
                </ListItem>
                  <ListItem button onClick={() => { this.props.handleChange(17) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Tom Cruise" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(4) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Train Your Dragon" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(5) }}>
                    <ListItemIcon>
                        <SupervisorAccount color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Narcos" />
                </ListItem>                
                <ListItem button onClick={() => { this.props.handleChange(10) }}>
                    <ListItemIcon>
                        <GroupWork color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Naruto" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(7) }}>
                    <ListItemIcon>
                        <GroupWork color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Boruto" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(8) }}>
                    <ListItemIcon>
                        <LiveTv color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Anime" />
                </ListItem>
                <ListItem button onClick={() => { this.props.handleChange(9) }}>
                    <ListItemIcon>
                        <Theaters color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Others" />
                </ListItem>
                <Divider />
                <ListItem button onClick={this.handleConfirm}>
                    <ListItemIcon>
                        <PowerSettingsNew color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </div>
        )
    }
}