import React, { Component } from 'react';
import clsx from 'clsx';
import {
    CssBaseline, Drawer, AppBar, withStyles,
    Toolbar, List, Typography, IconButton,
    Paper, Grid, Container, Divider
} from '@material-ui/core';
import {
    Menu, ChevronLeft, LiveTv
} from '@material-ui/icons';
import { Marvel } from './Marvel'
import { TrueStory } from './TrueStory'
import { Keanu } from './Keanu'
import { TrainYourDragon } from './TrainYourDragon'
import { Others } from './Others'
import { Narcos } from './Narcos'
import { JamesBond } from './JamesBond'
import { Boruto } from './Boruto'
import { Anime } from './Anime'
import { Naruto } from './Naruto'
import { GameOfThrones } from './GameOfThrones'
import { XMen } from './XMen'
import { Brooklyn99 } from './Brooklyn99'
import { Kingdom } from './Kingdom'
import { Lucifer } from './Lucifer'
import { StrangerThings } from './StrangerThings'
import { JasonStatham } from './JasonStatham'
import { TomCruise } from './TomCruise'
import SideNav from './SideNav'
import { useStyles } from '../higher-order/homeStyles'


export default withStyles(useStyles)(class Home extends Component {
    constructor() {
        super()
        this.state = {
            open: null,
            selectedNav: -1,
            path: 'https://192.168.19.60:444',
            path2: 'https://192.168.19.60:446',
            path3: 'https://192.168.19.60:447',
            selectedVid: null,
            currentMovie: ''
        }

        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)

    }

    componentDidMount() {
        const userData = localStorage.getItem('userData')
        try {
            const data = JSON.parse(userData)
            if (data.isAuthentic === false) {
                this.props.history.push('/')
            }
        } catch (error) {
            this.props.history.push('/')
        }

        const mainID = document.getElementById('main')
        if (this.state.selectedNav < 0) {
            mainID.style.visibility = 'hidden'
        }

    }
    componentDidUpdate() {
        const mainID = document.getElementById('main')
        if (this.state.selectedNav < 0) {
            mainID.style.visibility = 'hidden'
        } else {
            mainID.style.visibility = 'visible'
        }
    }
    handleDrawerOpen = () => {
        this.setState({
            ...this.state,
            open: true
        })
    }
    handleDrawerClose = () => {
        this.setState({
            ...this.state,
            open: false
        })
    }
    handleChange = (value) => {
        this.setState({
            ...this.state,
            selectedNav: value
        })

    }

    handleClick = (title, current, storage) => {

        const volume = document.getElementById("player")
        volume.volume = 1
        let path = ''
        switch (storage) {
            case 1:
                path = this.state.path
                break;
            case 2:
                path = this.state.path2
                break;
            case 3:
                path = this.state.path3
                break;
            default:
                break;
        }
        this.setState({
            ...this.state,
            selectedVid: `${path}${title}`,
            currentMovie: current,
        })
    }
    render() {


        const { classes } = this.props

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)} color="secondary">
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
                        >
                            <Menu />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Watch Now !
                    </Typography>
                        <LiveTv />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                    style={{ height: '655px' }}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeft color="secondary" />
                        </IconButton>
                    </div>
                    <Divider style={{ color: 'crimson' }} />
                    <List><SideNav handleChange={this.handleChange} /></List>
                    <Divider />

                </Drawer>
                <main className={classes.content} id="main" style={{ height: '100%' }}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <Paper className={classes.paper} id="movieTable" style={{ scrollBehavior: 'auto', height: '560px' }}>
                                    {this.state.selectedNav === 0 && <Marvel onClick={this.handleClick} />}
                                    {this.state.selectedNav === 1 && <GameOfThrones onClick={this.handleClick} />}
                                    {this.state.selectedNav === 2 && <TrueStory onClick={this.handleClick} />}
                                    {this.state.selectedNav === 3 && <Keanu onClick={this.handleClick} />}
                                    {this.state.selectedNav === 4 && <TrainYourDragon onClick={this.handleClick} />}
                                    {this.state.selectedNav === 5 && <Narcos onClick={this.handleClick} />}
                                    {this.state.selectedNav === 6 && <JamesBond onClick={this.handleClick} />}
                                    {this.state.selectedNav === 7 && <Boruto onClick={this.handleClick} />}
                                    {this.state.selectedNav === 8 && <Anime onClick={this.handleClick} />}
                                    {this.state.selectedNav === 9 && <Others onClick={this.handleClick} />}
                                    {this.state.selectedNav === 10 && <Naruto onClick={this.handleClick} />}
                                    {this.state.selectedNav === 11 && <XMen onClick={this.handleClick} />}
                                    {this.state.selectedNav === 12 && <Brooklyn99 onClick={this.handleClick} />}
                                    {this.state.selectedNav === 13 && <Kingdom onClick={this.handleClick} />}
                                    {this.state.selectedNav === 14 && <Lucifer onClick={this.handleClick} />}
                                    {this.state.selectedNav === 15 && <StrangerThings onClick={this.handleClick} />}
                                    {this.state.selectedNav === 16 && <JasonStatham onClick={this.handleClick} />}
                                    {this.state.selectedNav === 17 && <TomCruise onClick={this.handleClick} />}
                                </Paper>
                            </Grid>
                            <Grid item xs={8}>
                                <Paper className={classes.paper}>
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                        {this.state.currentMovie}
                                    </Typography>
                                    <video controls ref="vidRef" autoPlay src={this.state.selectedVid} id="player" style={{ width: '100%' }} />

                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        );
    }
})