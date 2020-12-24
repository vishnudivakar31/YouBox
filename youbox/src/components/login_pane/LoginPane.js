import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

import './login_pane.css'

class LoginPane extends Component {
    render() {
        return(
            <Box className='login_pane'>
                <Grid alignContent='center' justify='space-between' container>
                    <Box className='brand_name'>
                        YouBox
                    </Box>
                    <Grid alignContent='center' alignItems='center' className='login_button_group'>
                        <TextField id="username_text" label="email" variant="outlined" type='email' size='small' />
                        <TextField id="password_text" label="password" variant="outlined" type='password' size='small' />
                        <Button variant='contained' color='primary' size='medium' disabled>Login</Button>
                        <Link component='button'>Forgot password?</Link>
                    </Grid>
                </Grid>
            </Box>
        )
    }
}

export default LoginPane
