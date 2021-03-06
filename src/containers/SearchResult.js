import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import { connect } from 'react-redux'
import { likeVideo, deleteVideo } from '../redux/collection_redux/actions'
import VideoPaper from '../components/video_paper/VideoPaper'

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videoPlayerOpen: false,
            videoPlayerUrl: '',
            videoTitle: '',
            conversion_status: {
                id: '',
                msg: ''
            }
        }
        this.closeVideoPlayer = this.closeVideoPlayer.bind(this) 
        this.openVideoPlayer = this.openVideoPlayer.bind(this)
        this.downloadVideo = this.downloadVideo.bind(this) 
        this.downloadAudio = this.downloadAudio.bind(this)
        this.convertAudio = this.convertAudio.bind(this)
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
        const localhost = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : ''
        const backendUrl = `${localhost}/download_video?url=${url}&title=${title}`
        const link = document.createElement('a')
        link.href = backendUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    convertAudio(url, title, id) {
        const localhost = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : ''
        const backendUrl = `${localhost}/convert_audio?url=${url}&title=${title}`
        this.setState({ conversion_status: { id: id, msg: 'converting...'}})
        fetch(backendUrl)
        .then(response => {
            if(response.ok) {
                this.downloadAudio(url, title)
            }
            this.setState({ conversion_status: { id: '', msg: ''}})
        })
    }

    downloadAudio(url, title, id) {
        const localhost = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : ''
        const backendUrl = `${localhost}/download_audio?url=${url}&title=${title}`
        const link = document.createElement('a')
        link.href = backendUrl
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
    render() {
        if(this.props.collection_loading) {
            return (
                <Box display='flex' justifyContent='center' alignItems='center' width='100vw' height='70vh'>
                    <CircularProgress />
                </Box>
            )
        } else if (this.props.searchResults.length === 0) {
            return (
                <Box display='flex' justifyContent='center' alignItems='center' width='100vw' height='70vh'>
                    <Typography variant='h5'>No videos found...</Typography>
                </Box>
            )
        }
        return(
            <Box padding='1vh 1vw' className='my_collection'>
                <Box style={{ fontSize: '1.5rem', marginBottom: '1vh', fontWeight: 'bold' }}>Search Results</Box>
                <Box style={{ fontSize: '0.7rem', marginBottom: '1vh', fontWeight: 'bolder', fontStyle: 'italic', color: '#192a56' }}>Found: {this.props.searchResults.length}</Box>
                <Grid container spacing={1}>
                    {this.props.searchResults.map((item, index) => (
                        <Grid item spacing={1} key={index}>
                            <VideoPaper
                                index={index}
                                title={item.title}
                                url={item.url}
                                thumbnail_url={item.thumbnail_url}
                                favourite={item.favourite}
                                id={item.id}
                                conversion_status={this.state.conversion_status}
                                onPlay={this.openVideoPlayer} 
                                downloadVideo={this.downloadVideo}
                                downloadAudio={this.convertAudio}
                                likeVideo={this.props.likeVideo}
                                category={item.category}
                                deleteVideo={this.props.deleteVideo}
                                marginRight='0.5vw'
                                hideFav={true}
                                hideDelete={true}
                            />
                        </Grid>
                    ))}
                </Grid>
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
        searchResults: state.collection.searchResults,
        collection_loading: state.collection.collection_loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        likeVideo: payload => dispatch(likeVideo(payload)),
        deleteVideo: payload => dispatch(deleteVideo(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
