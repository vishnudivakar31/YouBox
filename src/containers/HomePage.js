import React, { Component, createRef } from 'react'
import HomeHeader from '../components/home_header/HomeHeader'
import HomeNavigation from '../components/home_nav/HomeNavigation'
import SearchIcon from '@material-ui/icons/Search';
import VideoCapsule from '../components/video_capsule/VideoCapsule'
import CategoryExplorer from '../components/category_explorer/CategoryExplorer'
import MyCollections from './MyCollections'
import Favourites from './Favourites'
import Recent from './Recent'
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@material-ui/core'
import { unSetUser } from '../redux/user_reducer/action'
import { searchVideo, setSearchError } from '../redux/search_redux/action'
import { fetchCategories, saveCategories, saveVideo } from '../redux/collection_redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nav_tab: 0,
            dialogOpen: false,
            selected_category: ''
        }
        this.searchVideoText = createRef()
        this.setNavTab = this.setNavTab.bind(this)
        this.tabRenderer = this.tabRenderer.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.selectCategory = this.selectCategory.bind(this)
    }
    
    componentDidMount() {
        if(this.props.user.userId.length === 0) {
            this.props.history.push('/')
        }
        this.props.fetchCategories()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user && this.props.user.userId.length === 0) {
            this.props.history.push('/')
        }
        if(prevProps.my_collections !== this.props.my_collections) {
            this.setState({
                dialogOpen: false
            })
        }
    }

    selectCategory(event) {
        this.setState({
            selected_category: event.target.value
        })
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
                <MyCollections />
            )
        } else if(this.state.nav_tab === 1) {
            return (
                <Favourites />
            )
        } else if(this.state.nav_tab === 2) {
            return (
                <Recent />
            )
        }
    }

    render() {
        const addButonDisabled = (this.searchVideoText.current === null || 
            (
                this.searchVideoText.current &&
                this.searchVideoText.current.value.length === 0 || 
                this.state.selected_category.length === 0
            )
        )
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
                            <Box>
                                <Typography variant='subtitle1' fontWeight='bold' fontSize='large'>
                                    Search Result
                                </Typography>
                                <VideoCapsule
                                    title={this.props.search_result.title}
                                    thumbnail_url={this.props.search_result.thumbnail_url}
                                    author_name={this.props.search_result.author_name}
                                />
                            </Box>
                            <Box marginTop='1vh'>
                                <CategoryExplorer
                                    categories={this.props.categories}
                                    saveCategories={this.props.saveCategories}
                                    selectCategory={this.selectCategory}
                                />
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button color='secondary' onClick={() => this.openDialog(false)}>Cancel</Button>
                        <Button 
                            color='primary' 
                            variant='contained' 
                            onClick={() => this.props.saveVideo({ search_result: this.props.search_result, category: this.state.selected_category })} 
                            disabled={addButonDisabled}
                        >
                            Add
                        </Button>
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
        categories: state.collection.categories,
        my_collections: state.collection.my_collections
    }
}

function mapDispatchToProps(dispatch) {
    return {
        unSetUser: () => dispatch(unSetUser()),
        searchVideo: payload => dispatch(searchVideo(payload)),
        setSearchError: payload => dispatch(setSearchError(payload)),
        fetchCategories: payload => dispatch(fetchCategories(payload)),
        saveCategories: payload => dispatch(saveCategories(payload)),
        saveVideo: payload => dispatch(saveVideo(payload))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (HomePage))
