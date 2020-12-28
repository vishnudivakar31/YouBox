import React, { Component } from 'react'
import HomeHeader from '../components/home_header/HomeHeader'
import HomeNavigation from '../components/home_nav/HomeNavigation'
import SearchIcon from '@material-ui/icons/Search';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@material-ui/core'
import { unSetUser } from '../redux/user_reducer/action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nav_tab: 0,
            dialogOpen: false
        }
        this.setNavTab = this.setNavTab.bind(this)
        this.tabRenderer = this.tabRenderer.bind(this)
        this.openDialog = this.openDialog.bind(this)
    }
    
    componentDidMount() {
        if(this.props.user.userId.length === 0) {
            this.props.history.push('/')
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user && this.props.user.userId.length === 0) {
            this.props.history.push('/')
        }
    }

    openDialog(status) {
        this.setState({ dialogOpen: status })
    }

    setNavTab(tabIndex) {
        this.setState({ nav_tab: tabIndex })
    }

    tabRenderer() {
        if(this.state.nav_tab === 0) {
            return (
                <div>My Collection</div>
            )
        } else if(this.state.nav_tab === 1) {
            return (
                <div>Favourites</div>
            )
        } else if(this.state.nav_tab === 2) {
            return (
                <div>Trending</div>
            )
        } else if(this.state.nav_tab === 3) {
            return (
                <div>Recent</div>
            )
        }
    }

    render() {
        return (
            <Box>
                <HomeHeader 
                    name={this.props.user.name}
                    logout={this.props.unSetUser}
                />
                <HomeNavigation 
                    navigation={this.setNavTab}
                    createHandler={this.openDialog}
                />
                <Box>
                    {this.tabRenderer()}
                </Box>
                <Dialog open={this.state.dialogOpen} onClose={() => this.openDialog(false)}>
                    <DialogTitle>Add video to your collection</DialogTitle>
                    <DialogContent>
                        <Box display='flex' alignItems='center'>
                            <TextField label='youtube-url' variant='outlined' size='small' fullWidth style={{ width: '30vw' }} />
                            <IconButton style={{ marginLeft: '0.5vw' }} color='primary' aria-label='search video'>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button color='secondary' onClick={() => this.openDialog(false)}>Cancel</Button>
                        <Button color='primary' variant='contained' onClick={() => this.openDialog(false)} disabled>Add</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        login_status: state.user.login_status 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        unSetUser: () => dispatch(unSetUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (HomePage))
