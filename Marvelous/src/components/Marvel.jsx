import React, { Fragment, Component } from 'react';
import {
    Typography, TableBody,
    TableCell, TableHead, TableRow, Table, ListItem
} from '@material-ui/core';
import { GetAxios } from '../logic/Axios'
export class Marvel extends Component {

    constructor() {
        super()
        this.state = {
            phase1: null,
            phase2: null,
            phase3: null,
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = (title, current, storage) => {
        this.props.onClick(title, current, storage)
    }
    async handleRequest() {
        let port = '215'
        const response = await GetAxios('/Marvel/Phase 1', port)
        const response2 = await GetAxios('/Marvel/Phase 2', port)
        const response3 = await GetAxios('/Marvel/Phase 3', port)
        this.setState({
            ...this.state,
            phase1: response,
            phase2: response2,
            phase3: response3,
        })
    }
    componentDidMount = () => {
        this.handleRequest()
    }
    render() {

        const titleStyle = { fontWeight: '900' }
        return (

            <Fragment>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Marvel
            </Typography>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Phase 1</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.phase1 ? this.state.phase1.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button onClick={() => { this.handleClick(`${'/Marvel/Phase 1/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Phase 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.phase2 ? this.state.phase2.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Marvel/Phase 2/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Phase 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.phase3 ? this.state.phase3.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Marvel/Phase 3/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                </Table>

            </Fragment>
        )
    }

}