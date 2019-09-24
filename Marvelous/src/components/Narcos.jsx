import React, { Fragment, Component } from 'react';
import {
    Typography, TableBody,
    TableCell, TableHead, TableRow, Table, ListItem
} from '@material-ui/core';
import { GetAxios } from '../logic/Axios'
export class Narcos extends Component {

    constructor() {
        super()
        this.state = {
            season1: null,
            season2: null,
            season3: null,
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = (title, current, storage) => {
        this.props.onClick(title, current, storage)
    }
    async handleRequest() {
        let port = '215'
        const response = await GetAxios('/Narcos/Movies/Season 1', port)
        const response2 = await GetAxios('/Narcos/Movies/Season 2', port)
        const response3 = await GetAxios('/Narcos/Movies/Season 3', port)
        this.setState({
            ...this.state,
            season1: response,
            season2: response2,
            season3: response3,
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
                    Narcos
            </Typography>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 1</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season1 ? this.state.season1.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button onClick={() => { this.handleClick(`${'/Narcos/Movies/Season 1/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 2</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season2 ? this.state.season2.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Narcos/Movies/Season 2/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season3 ? this.state.season3.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Narcos/Movies/Season 3/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
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