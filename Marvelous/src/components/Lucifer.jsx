import React, { Fragment, Component } from 'react';
import {
    Typography, TableBody,
    TableCell, TableHead, TableRow, Table, ListItem
} from '@material-ui/core';
import { GetAxios } from '../logic/Axios'
export class Lucifer extends Component {

    constructor() {
        super()
        this.state = {
            season1: null,
            season2: null,
            season3: null,
            season4: null,
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = (title, current, storage) => {
        this.props.onClick(title, current, storage)
    }
    async handleRequest() {
        let port = '217'
        const response = await GetAxios('/Netflix and Chill/Lucifer/Season 1/Movies', port)
        const response2 = await GetAxios('/Netflix and Chill/Lucifer/Season 2/Movies', port)
        const response3 = await GetAxios('/Netflix and Chill/Lucifer/Season 3/Movies', port)
        const response4 = await GetAxios('/Netflix and Chill/Lucifer/Season 4/Movies', port)


        this.setState({
            ...this.state,
            season1: response,
            season2: response2,
            season3: response3,
            season4: response4,
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
                    Lucifer
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
                                <TableCell><ListItem button onClick={() => { this.handleClick(`${'/Netflix and Chill/Lucifer/Season 1/Movies/'}${row.name}`, row.name, 3) }}>{row.name}</ListItem></TableCell>
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
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Netflix and Chill/Lucifer/Season 2/Movies/'}${row.name}`, row.name, 3) }}>{row.name}</ListItem></TableCell>
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
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Netflix and Chill/Lucifer/Season 3/Movies/'}${row.name}`, row.name, 3) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 4</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season4 ? this.state.season4.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Netflix and Chill/Lucifer/Season 4/Movies/'}${row.name}`, row.name, 3) }}>{row.name}</ListItem></TableCell>
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