import { Box, CircularProgress, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import CollectionGrid from '../components/collection_grid/CollectionGrid'
import { connect } from 'react-redux'
import { fetchVideos } from '../redux/collection_redux/actions'

class MyCollections extends Component {
    componentDidMount() {
        this.props.fetchVideos()
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
                        <CollectionGrid collections={this.props.my_collections[item]} />
                    </Box>
                ))}
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
