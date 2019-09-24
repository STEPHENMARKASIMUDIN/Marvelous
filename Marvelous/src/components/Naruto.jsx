import React, { Fragment, Component } from 'react';
import {
    Typography, TableBody,
    TableCell, TableHead, TableRow, Table, ListItem
} from '@material-ui/core';
import { GetAxios } from '../logic/Axios'
export class Naruto extends Component {

    constructor() {
        super()
        this.state = {
            movies: null,
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick = (title, current, storage) => {
        this.props.onClick(title, current, storage)
    }
    async handleRequest() {
        const response = await GetAxios('/Naruto/Movies', '216')
        this.setState({
            ...this.state,
            movies: response
        })
    }
    componentDidMount() {
        this.handleRequest()
    }

    render() {

        const titleStyle = { fontWeight: '900' }
        return (

            <Fragment>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Naruto
            </Typography>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Episodes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.movies ? this.state.movies.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button onClick={() => { this.handleClick(`${'/Naruto/Movies/'}${row.name}`, row.name, 2) }}>{row.name}</ListItem></TableCell>
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