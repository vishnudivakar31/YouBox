import { Box } from '@material-ui/core'
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'

import './home_header.css'

class HomeHeader extends Component {
    render() {
        return(
            <Box display='flex' alignItems='center' justifyContent='space-between' className='home_header'>
                <Box className='brand_name'>
                    YouBox
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between' className='button_group'>
                    <Box className='welcome_txt'>
                        Welcome {this.props.name}
                    </Box>
                    <Box>
                        <IconButton color="primary" aria-label="settings" component="span" onClick={() => alert('under development')}>
                            <SettingsIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={ <ExitToAppIcon /> }
                            onClick={this.props.logout}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default HomeHeader
