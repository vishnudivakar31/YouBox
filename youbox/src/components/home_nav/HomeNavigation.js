import { Box } from '@material-ui/core'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import FavoriteIcon from '@material-ui/icons/Favorite'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import UpdateIcon from '@material-ui/icons/Update'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import './home_navigation.css'
import { useState } from 'react'

function HomeNavigation({ navigation }) {
    const [selectedTab, setTab] = useState(0)
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
                    <TrendingUpIcon />
                    <Box marginLeft='0.5vw'>Trending</Box>
                </Box>
                <Box className={selectedTab === 3 ? 'tab_active' : 'tab_inactive'} onClick={() => clickHandler(3)}>
                    <UpdateIcon />
                    <Box marginLeft='0.5vw'>Recent</Box>
                </Box>
            </Box>
            <Box className='add_new_button'>
                <AddCircleOutlineIcon />
                <Box marginLeft='0.5vw'>Add new video</Box>
            </Box>
        </Box>
    )

    function clickHandler(tab_index) {
        setTab(tab_index)
        navigation(tab_index)
    }
}

export default HomeNavigation
