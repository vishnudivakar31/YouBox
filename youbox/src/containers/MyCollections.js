import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, Typography, DialogTitle } from '@material-ui/core'
import React, { Component } from 'react'
import CollectionGrid from '../components/collection_grid/CollectionGrid'
import ReactPlayer from 'react-player/youtube'
import { connect } from 'react-redux'
import { fetchVideos } from '../redux/collection_redux/actions'

class MyCollections extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoPlayerOpen: false,
            videoPlayerUrl: '',
            videoTitle: ''
        }
        this.closeVideoPlayer = this.closeVideoPlayer.bind(this) 
        this.openVideoPlayer = this.openVideoPlayer.bind(this)
        this.downloadVideo = this.downloadVideo.bind(this) 
    }
    componentDidMount() {
        this.props.fetchVideos()
    }
    openVideoPlayer(url, title) {
        this.setState({
            videoPlayerOpen: true,
            videoPlayerUrl: url,
            videoTitle: title
        })
    }
    closeVideoPlayer() {
        this.setState({
            videoPlayerOpen: false,
            videoPlayerUrl: '',
            videoTitle: ''
        })
    }

    downloadVideo(url, title) {
        const backendUrl = `http://localhost:8080/download_video?url=${url}&title=${title}`
        const link = document.createElement('a')
        link.href = backendUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    render() {
        const categories = Object.keys(this.props.my_collections)
        categories.sort()
        if(this.props.collection_loading) {
            return (
                <Box display='flex' justifyContent='center' alignItems='center' width='100vw' height='70vh'>
                    <CircularProgress />
                </Box>
            )
        }
        return(
            <Box padding='0.5vh 1vw' className='my_collection'>
                {categories.map((item, index) => (
                    <Box key={index} className='collection_parent_grid'>
                        <Box display='flex' alignItems='center'>
                            <Typography variant='h6'>{item}</Typography>
                            <Box 
                                className='counter_display'
                            >
                                {this.props.my_collections[item].length}
                            </Box>
                        </Box>
                        <CollectionGrid 
                            collections={this.props.my_collections[item]} 
                            onPlay={this.openVideoPlayer} 
                            downloadVideo={this.downloadVideo}
                        />
                    </Box>
                ))}
                <Dialog open={this.state.videoPlayerOpen} fullWidth fullScreen>
                    <DialogTitle>{this.state.videoTitle}</DialogTitle>
                    <DialogContent>
                        <ReactPlayer 
                            url={this.state.videoPlayerUrl} 
                            controls
                            playing
                            width='98vw'
                            height='86vh'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeVideoPlayer} color='primary'>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        )
    }
}

function mapStateToProps(state) {
    return {
        my_collections: state.collection.my_collections,
        collection_loading: state.collection.collection_loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCollections)
