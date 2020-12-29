import React, { Component, createRef } from 'react'
import HomeHeader from '../components/home_header/HomeHeader'
import HomeNavigation from '../components/home_nav/HomeNavigation'
import SearchIcon from '@material-ui/icons/Search';
import VideoCapsule from '../components/video_capsule/VideoCapsule'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@material-ui/core'
import { unSetUser } from '../redux/user_reducer/action'
import { searchVideo, setSearchError } from '../redux/search_redux/action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nav_tab: 0,
            dialogOpen: false
        }
        this.searchVideoText = createRef()
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
        if(status === true) {
            this.props.setSearchError({ error_status: false, error_msg: '' })
        }
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
                    <DialogTitle>
                        <Box display='flex' alignItems='center'>
                            <Box fontWeight='bold' fontSize='x-large'>Add video to your collection</Box>
                            <Box hidden={!this.props.search_loading} marginLeft='0.5vw'>
                                <CircularProgress size='1.5rem' />
                            </Box>
                        </Box>
                        
                    </DialogTitle>
                    <DialogContent>
                        <Box display='flex' alignItems='center'>
                            <TextField 
                                label='youtube-url' 
                                variant='outlined' 
                                size='small' 
                                fullWidth 
                                style={{ width: '30vw' }} 
                                inputRef={this.searchVideoText}
                            />
                            <IconButton 
                                style={{ marginLeft: '0.5vw' }} 
                                color='primary' 
                                aria-label='search video'
                                onClick={() => this.props.searchVideo({ url: this.searchVideoText.current ? this.searchVideoText.current.value : undefined })}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Box>
                        <Box display='flex' alignItems='center' hidden={!this.props.search_error.error}>
                            <Typography variant='caption' color='error'>
                                {this.props.search_error.msg}
                            </Typography>
                        </Box>
                        <Box hidden={!this.props.search_status}>
                            <Typography variant='subtitle1' fontWeight='bold' fontSize='large'>
                                Search Result
                            </Typography>
                            <VideoCapsule
                                title={this.props.search_result.title}
                                thumbnail_url={this.props.search_result.thumbnail_url}
                                author_name={this.props.search_result.author_name}
                            />
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
        login_status: state.user.login_status,
        search_loading: state.search.loading,
        search_result: state.search.search_result,
        search_status: state.search.search_status,
        search_error: state.search.search_error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        unSetUser: () => dispatch(unSetUser()),
        searchVideo: payload => dispatch(searchVideo(payload)),
        setSearchError: payload => dispatch(setSearchError(payload))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (HomePage))
