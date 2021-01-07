import { Box, Button, TextField } from '@material-ui/core'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import FavoriteIcon from '@material-ui/icons/Favorite'
import SearchIcon from '@material-ui/icons/Search';
import UpdateIcon from '@material-ui/icons/Update'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import FindInPageIcon from '@material-ui/icons/FindInPage';

import './home_navigation.css'
import { useEffect, useRef, useState } from 'react'

function HomeNavigation({ navigation, createHandler, showSearchResults, searchVideo }) {
    const [selectedTab, setTab] = useState(0)
    const [searchValidity, setSearchValidity] = useState(false)
    const searchRef = useRef(null)

    useEffect(() => {
        setTab(showSearchResults ? 3 : 0)
    }, [showSearchResults])

    return (
        <Box className='home_navigation'>
            <Box className='home_nav_button_group'>
                <Box className={selectedTab === 0 ? 'tab_active' : 'tab_inactive'} onClick={() => clickHandler(0)}>
                    <ViewModuleIcon />
                    <Box marginLeft='0.5vw' whiteSpace='noWrap'>My Collection</Box>
                </Box>
                <Box className={selectedTab === 1 ? 'tab_active' : 'tab_inactive'} onClick={() => clickHandler(1)}>
                    <FavoriteIcon />
                    <Box marginLeft='0.5vw'>Favourites</Box>
                </Box>
                <Box className={selectedTab === 2 ? 'tab_active' : 'tab_inactive'} onClick={() => clickHandler(2)}>
                    <UpdateIcon />
                    <Box marginLeft='0.5vw'>Recent</Box>
                </Box>
                <Box style={{ display: selectedTab === 3 ? 'flex' : 'none', alignItems: 'center', borderBottom: '1px solid white'}} onClick={() => clickHandler(3)}>
                    <FindInPageIcon />
                    <Box marginLeft='0.5vw' style={{ whiteSpace: 'nowrap' }}>Search Results</Box>
                </Box>
            </Box>
            <Box display='flex' alignItems='center' color='white' style={{ background: 'white', padding: '0.5vh 0.5vw', borderRadius: '5px' }}>
                <TextField 
                    style={{ marginRight: '0.5vw', width: '20vw' }} 
                    placeholder='video-name'
                    inputRef={searchRef}
                    error={searchValidity}
                    helperText={searchValidity ? 'enter atleast a part of video name' : ''}
                    fullWidth 
                />
                <Button 
                    variant='outlined' 
                    color='primary'
                    startIcon={<SearchIcon />}
                    onClick={() => searchHandler()}
                >
                    Search
                </Button>
            </Box>
            <Box className='add_new_button' onClick={() => createHandler(true)}>
                <AddCircleOutlineIcon />
                <Box marginLeft='0.5vw'>Add new video</Box>
            </Box>
        </Box>
    )

    function clickHandler(tab_index) {
        setTab(tab_index)
        navigation(tab_index)
    }

    function searchHandler() {
        const keyword = searchRef.current ? searchRef.current.value : ''
        if(keyword.length === 0) {
            setSearchValidity(true)
        } else {
            setSearchValidity(false)
            searchVideo({ keyword })
        }
    }
}

export default HomeNavigation
