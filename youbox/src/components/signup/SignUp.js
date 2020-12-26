import { Button } from "@material-ui/core";
import React, { Component, createRef } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import { connect } from 'react-redux'
import { registerUser } from '../../redux/user_reducer/action'

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
                cond6: false,
                cond7: false
            },
            form_error: {
                field1: {
                    error: false,
                    msg: ""
                },
                field2: {
                    error: false,
                    msg: ""
                },
                field3: {
                    error: false,
                    msg: ""
                },
                field4: {
                    error: false,
                    msg: ""
                }
            },
            loading: false
        }
        this.nameRef = createRef()
        this.emailRef = createRef()
        this.passwordRef = createRef()
        this.confirmPasswordRef = createRef()
        this.passwordValidator = this.passwordValidator.bind(this)
        this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.register_status !== this.props.register_status) {
            this.setState({
                loading: false
            })
        }
    }

    submit() {
        let loading = false
        let field1 = {
            error: false,
            msg: ""
        }
        let field2 = {
            error: false,
            msg: ""
        }
        let field3 = {
            error: false,
            msg: ""
        }
        let field4 = {
            error: false,
            msg: ""
        }
        if(this.nameRef.current === undefined || this.nameRef.current.value.length === 0) {
            field1 = {
                error: true,
                msg: 'required field'
            }
        }
        if(this.emailRef.current === undefined || this.emailRef.current.value.length === 0) {
            field2 = {
                error: true,
                msg: 'required field'
            }
        }
        if(this.passwordRef.current === undefined || this.passwordRef.current.value.length === 0) {
            field3 = {
                error: true,
                msg: 'required field'
            }
        }
        if(this.confirmPasswordRef.current === undefined || this.confirmPasswordRef.current.value.length === 0) {
            field4 = {
                error: true,
                msg: 'required field'
            }
        }
        if(!field1.error && 
            !field2.error && 
            !field3.error && 
            !field4.error && 
            this.state.form_validity.cond1 &&
            this.state.form_validity.cond2 &&
            this.state.form_validity.cond3 &&
            this.state.form_validity.cond4 &&
            this.state.form_validity.cond5 &&
            this.state.form_validity.cond6 &&
            this.state.form_validity.cond7) {
            this.props.registerUser({
                name: this.nameRef.current.value,
                email: this.emailRef.current.value,
                password: this.passwordRef.current.value,
            })
            loading = true
        }
        this.setState({
            form_error:{
                field1,
                field2,
                field3,
                field4
            },
            loading
        })
    }

    confirmPasswordHandler(event) {
        const password = this.passwordRef.current.value
        const confirmPassword = event.target.value
        let confirm = false
        if(password === confirmPassword) {
            confirm = true
        }
        this.setState({
            form_validity: {
                cond1: this.state.form_validity.cond1,
                cond2: this.state.form_validity.cond2,
                cond3: this.state.form_validity.cond3,
                cond4: this.state.form_validity.cond4,
                cond5: this.state.form_validity.cond5,
                cond6: this.state.form_validity.cond6,
                cond7: confirm
            }
        })
    }

    passwordValidator(event) {
        let password = event.target.value
        let cond1 = false, cond2 = true, cond3 = false, cond4 = false, cond5 = false, cond6 = false
        const cond3Regex = /(?=.*[0-9])/
        const cond4Regex = /(?=.*[!@#$!])/
        const cond5Regex = /[A-Z]/
        const cond6Regex = /[a-z]/
        if(password.length >= 6) {
            cond1 = true
        }
        if(password.length > 16) {
            cond2 = false
        }
        if(password.match(cond3Regex)) {
            cond3 = true
        }
        if(password.match(cond4Regex)) {
            cond4 = true
        }
        if(password.match(cond5Regex)) {
            cond5 = true
        }
        if(password.match(cond6Regex)) {
            cond6 = true
        }
        this.setState({
            form_validity: {
                cond1,
                cond2,
                cond3,
                cond4,
                cond5,
                cond6,
                cond7: this.state.form_validity.cond7
            }
        })
    }

    render() {
        const icons = [
            this.state.form_validity.cond1 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond2 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond3 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond4 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond5 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond6 ? <CheckIcon /> : <CancelIcon />,
            this.state.form_validity.cond7 ? <CheckIcon /> : <CancelIcon />
        ]
        const colors = [
            this.state.form_validity.cond1 ? 'green' : 'red',
            this.state.form_validity.cond2 ? 'green' : 'red',
            this.state.form_validity.cond3 ? 'green' : 'red',
            this.state.form_validity.cond4 ? 'green' : 'red',
            this.state.form_validity.cond5 ? 'green' : 'red',
            this.state.form_validity.cond6 ? 'green' : 'red',
            this.state.form_validity.cond7 ? 'green' : 'red'
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

                                <ListItem style={{ color: colors[6]}}>
                                    <ListItemIcon style={{ color: colors[6]}}>
                                        {icons[6]}
                                    </ListItemIcon>
                                    <ListItemText primary="Both passwords should match" />
                                </ListItem>
                            </List>
                        </Container>
                        <Container>
                            <Box className='create_account'>
                                Create Account
                            </Box>
                            <Box>
                                <TextField 
                                    id="name_text" 
                                    label="Name" 
                                    variant="outlined" 
                                    type='username' 
                                    size='medium' 
                                    fullWidth 
                                    className='form_input'
                                    inputRef={this.nameRef}
                                    error={this.state.form_error.field1.error}
                                    helperText={this.state.form_error.field1.msg}
                                />
                            </Box>
                            <Box>
                                <TextField 
                                    id="email_text" 
                                    label="email" 
                                    variant="outlined" 
                                    type='username' 
                                    fullWidth 
                                    className='form_input'
                                    inputRef={this.emailRef}
                                    error={this.state.form_error.field2.error}
                                    helperText={this.state.form_error.field2.msg}
                                />
                            </Box>
                            <Box>
                                <TextField 
                                    id="password_text" 
                                    label="password" 
                                    variant="outlined" 
                                    type='password' 
                                    fullWidth 
                                    className='form_input'
                                    inputRef={this.passwordRef}
                                    onChange={this.passwordValidator}
                                    error={this.state.form_error.field3.error}
                                    helperText={this.state.form_error.field3.msg}
                                />
                            </Box>
                            <Box>
                                <TextField 
                                    id="confirm_password_text" 
                                    label="confirm password" 
                                    variant="outlined" 
                                    type='password' 
                                    fullWidth 
                                    className='form_input' 
                                    inputRef={this.confirmPasswordRef}
                                    onChange={this.confirmPasswordHandler}
                                    error={this.state.form_error.field4.error}
                                    helperText={this.state.form_error.field4.msg}
                                />
                            </Box>
                            <Box display='flex' alignItems='center'>
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    className='form_input'
                                    onClick={this.submit}
                                >
                                    Submit
                                </Button>
                                <Box marginTop='2%' marginLeft='2%' hidden={!this.state.loading}>
                                    <CircularProgress size='2rem' />
                                </Box>
                            </Box>
                            <Box hidden={!this.props.register_status.failure}>
                                <Typography variant='caption' display='block' color='error' gutterBottom>
                                    {this.props.register_status.message}
                                </Typography>
                            </Box>
                            <Box hidden={!this.props.register_status.success}>
                                <Typography variant='caption' display='block' color='primary' gutterBottom>
                                    {this.props.register_status.message}
                                </Typography>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        register_status: state.user.register_status 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerUser: user => dispatch(registerUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
