import { Button } from "@material-ui/core";
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckIcon from '@material-ui/icons/Check'

import './signup.css'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form_validity: {
                cond1: false,
                cond2: true,
                cond3: false,
                cond4: false,
                cond5: false,
                cond6: false
            }
        }
    }
    render() {
        let icons = [
            this.state.form_validity.cond1 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond2 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond3 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond4 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond5 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond6 ? <CheckIcon /> : <CancelIcon />
        ]
        let colors = [
            this.state.form_validity.cond1 ? 'green' : 'red',
            this.state.form_validity.cond2 ? 'green' : 'red',
            this.state.form_validity.cond3 ? 'green' : 'red',
            this.state.form_validity.cond4 ? 'green' : 'red',
            this.state.form_validity.cond5 ? 'green' : 'red',
            this.state.form_validity.cond6 ? 'green' : 'red'
        ]
        return(
            <Container fixed className='signup'>
                <Box textAlign='center' className='join_text'>
                    Join YouBox
                </Box>
                <Box textAlign='center' className='subtitle'>
                    download and catalog youtube videos
                </Box>
                <Container className='form' fixed>
                    <Box display='flex'>
                        <Container className='instructions'>
                            <Box className='create_account'>
                                Password Instructions
                            </Box>
                            <List>
                                <ListItem style={{ color: colors[0]}}>
                                    <ListItemIcon style={{ color: colors[0]}}>
                                        {icons[0]}
                                    </ListItemIcon>
                                    <ListItemText primary="Should be more than 6 characters" />
                                </ListItem>

                                <ListItem style={{ color: colors[1]}}>
                                    <ListItemIcon style={{ color: colors[1]}}>
                                        {icons[1]}
                                    </ListItemIcon>
                                    <ListItemText primary="Should be less than 16 characters" />
                                </ListItem>

                                <ListItem style={{ color: colors[2]}}>
                                    <ListItemIcon style={{ color: colors[2]}}>
                                        {icons[2]}
                                    </ListItemIcon>
                                    <ListItemText primary="Should contain atleast one number" />
                                </ListItem>

                                <ListItem style={{ color: colors[3]}}>
                                    <ListItemIcon style={{ color: colors[3]}}>
                                        {icons[3]}
                                    </ListItemIcon>
                                    <ListItemText primary="Should contain atleast one special symbol (@, #, $, !)" />
                                </ListItem>

                                <ListItem style={{ color: colors[4]}}>
                                    <ListItemIcon style={{ color: colors[4]}}>
                                        {icons[4]}
                                    </ListItemIcon>
                                    <ListItemText primary="Should contain atleast one uppercase letter" />
                                </ListItem>

                                <ListItem style={{ color: colors[5]}}>
                                    <ListItemIcon style={{ color: colors[5]}}>
                                        {icons[5]}
                                    </ListItemIcon>
                                    <ListItemText primary="Should contain atleast one lowercase letter" />
                                </ListItem>
                            </List>
                        </Container>
                        <Container>
                            <Box className='create_account'>
                                Create Account
                            </Box>
                            <Box>
                                <TextField id="name_text" label="Name" variant="outlined" type='username' size='medium' fullWidth className='form_input' />
                            </Box>
                            <Box>
                                <TextField id="email_text" label="email" variant="outlined" type='username' fullWidth className='form_input' />
                            </Box>
                            <Box>
                                <TextField id="password_text" label="password" variant="outlined" type='password' fullWidth className='form_input' />
                            </Box>
                            <Box>
                                <TextField id="confirm_password_text" label="confirm password" variant="outlined" type='password' fullWidth className='form_input' />
                            </Box>
                            <Box>
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    className='form_input' 
                                    disabled={!(this.state.form_validity.cond1 &&
                                        this.state.form_validity.cond2 &&
                                        this.state.form_validity.cond3 &&
                                        this.state.form_validity.cond4 &&
                                        this.state.form_validity.cond5)}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Container>
        )
    }
}

export default SignUp
