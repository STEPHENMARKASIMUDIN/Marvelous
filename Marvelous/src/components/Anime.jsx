import React, { Fragment, Component } from 'react';
import {
    Typography, TableBody,
    TableCell, TableHead, TableRow, Table, ListItem
} from '@material-ui/core';
import { GetAxios } from '../logic/Axios'
export class Anime extends Component {

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
        const response = await GetAxios('/Anime/Movies', '215')
        this.setState({
            ...this.state,
            movies: response
        })
    }
    componentDidMount() {
        this.handleRequest()

        const searchBar = document.forms['searchOthers'].querySelector('input');

        searchBar.addEventListener('keyup', e => {
            const table = document.querySelector("#movieTable table")

            const term = e.target.value.toLowerCase();
            const movieRows = table.getElementsByTagName('tr')


            Array.from(movieRows).forEach(movie => {
                const title = movie.firstElementChild.textContent;

                if (title.toLowerCase().indexOf(term) !== -1) {
                    movie.style.display = 'block'
                } else {
                    movie.style.display = 'none'
                }
            })

        })
    }

    render() {

        const titleStyle = { fontWeight: '900' }
        return (

            <Fragment>
                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                    Anime
                </Typography>
                <form id="searchOthers">
                    <input type="text" placeholder="Search anime..." style={{ height: '30px', width: '290px', padding: '10px' }} />
                </form>
                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell style={titleStyle}>Series</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.movies ? this.state.movies.map(row => (
                            <TableRow key={row.time}>
                                <TableCell><ListItem button onClick={() => { this.handleClick(`${'/Anime/Movies/'}${row.name}`, row.name, 1) }}>{row.name}</ListItem></TableCell>
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