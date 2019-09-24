import React, { Fragment, Component } from 'react';
import {
    Typography, TableBody,
    TableCell, TableHead, TableRow, Table, ListItem
} from '@material-ui/core';
import { GetAxios } from '../logic/Axios'
export class GameOfThrones extends Component {

    constructor() {
        super()
        this.state = {
            season1: null,
            season2: null,
            season3: null,
            season4: null,
            season5: null,
            season6: null,
            season7: null,
            season8: null,
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = (title, current, storage) => {
        this.props.onClick(title, current, storage)
    }
    async handleRequest() {
        let port = '216'
        const response = await GetAxios('/Game of thrones/Season 1/Movies', port)
        const response2 = await GetAxios('/Game of thrones/Season 2/Movies', port)
        const response3 = await GetAxios('/Game of thrones/Season 3/Movies', port)
        const response4 = await GetAxios('/Game of thrones/Season 4/Movies', port)
        const response5 = await GetAxios('/Game of thrones/Season 5/Movies', port)
        const response6 = await GetAxios('/Game of thrones/Season 6/Movies', port)
        const response7 = await GetAxios('/Game of thrones/Season 7/Movies', port)
        const response8 = await GetAxios('/Game of thrones/Season 8/Movies', port)
        this.setState({
            ...this.state,
            season1: response,
            season2: response2,
            season3: response3,
            season4: response4,
            season5: response5,
            season6: response6,
            season7: response7,
            season8: response8,
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
                    Game Of Thrones
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
                                <TableCell><ListItem button onClick={() => { this.handleClick(`${'/Game of thrones/Season 1/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
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
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 2/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
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
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 3/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
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
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 4/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 5</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season5 ? this.state.season5.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 5/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 6</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season6 ? this.state.season6.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 6/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 7</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season7 ? this.state.season7.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 7/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
                            </TableRow>
                        )) : <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Loading...
                            </Typography>}
                    </TableBody>
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Season 8</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.season8 ? this.state.season8.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button key={row.time} onClick={() => { this.handleClick(`${'/Game of thrones/Season 8/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
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