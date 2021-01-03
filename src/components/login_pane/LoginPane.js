import React, { Component, createRef } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import { loginUser, forgotPassword } from '../../redux/user_reducer/action'
import { withRouter } from 'react-router-dom'

import './login_pane.css'

class LoginPane extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            form_error: {
                field1: {
                    error: false,
                    msg: ''
                },
                field2: {
                    error: false,
                    msg: ''
                }
            }
        }
        this.emailRef = createRef()
        this.passwordRef = createRef()
        this.loginHandler = this.loginHandler.bind(this)
        this.forgetPasswordHandler = this.forgetPasswordHandler.bind(this) 
    }

    componentDidMount() {
        if(this.props.login_status.success && this.props.user.userId.length > 0) {
            this.props.history.push('/home')
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.login_status !== this.props.login_status && this.props.login_status.success && this.props.user.userId.length > 0) {
            this.props.history.push('/home')
        }
    }

    loginHandler() {
        const email = this.emailRef.current ? this.emailRef.current.value : undefined
        const password = this.passwordRef.current ? this.passwordRef.current.value : undefined
        let field1 = {
            error: false,
            msg: ''
        }
        let field2 = {
            error: false,
            msg: ''
        }
        if(email && password && email.length > 0 && password.length > 0) {
            this.props.loginUser({
                email,
                password
            })
        } else {
            if(email === undefined || email.length === 0) {
                field1 = {
                    error: true,
                    msg: 'email is required'
                }
            }
            if(password === undefined || password.length === 0) {
                field2 = {
                    error: true,
                    msg: 'password is required'
                }
            }
        }
        this.setState({
            form_error: { field1, field2 }
        })
    }

    forgetPasswordHandler() {
        const email = this.emailRef.current ? this.emailRef.current.value : undefined
        let field1 = {
            error: false,
            msg: ''
        }
        let field2 = {
            error: false,
            msg: ''
        }
        if(email && email.length > 0) {
            this.props.forgotPassword({ email })
        } else {
            field1 = { error: true, msg: 'email is required' }
        }
        this.setState({
            form_error: { field1, field2 }
        })
    }

    render() {
        return(
            <Box className='login_pane'>
                <Grid alignContent='center' justify='space-between' container>
                    <Box className='brand_name'>
                        YouBox
                    </Box>
                    <Box>
                        <Grid alignContent='center' alignItems='center' className='login_button_group'>
                            <TextField 
                                id="username_text" 
                                label="email" 
                                variant="outlined" 
                                type='email' 
                                size='small' 
                                inputRef={this.emailRef}
                                error={this.state.form_error.field1.error}
                                helperText={this.state.form_error.field1.msg}
                            />
                            <TextField 
                                id="password_text" 
                                label="password" 
                                variant="outlined" 
                                type='password' 
                                size='small' 
                                inputRef={this.passwordRef} 
                                error={this.state.form_error.field2.error}
                                helperText={this.state.form_error.field2.msg}
                            />
                            <Button variant='contained' color='primary' size='medium' onClick={this.loginHandler}>
                                Login
                            </Button>
                            <Link component='button' onClick={this.forgetPasswordHandler}>Forgot password?</Link>
                        </Grid>
                        <Box hidden={!this.props.login_status.failure} marginLeft='1.5%'>
                            <Typography variant='caption' display='block' color='error' gutterBottom>
                                {this.props.login_status.message}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        login_status: state.user.login_status 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: user => dispatch(loginUser(user)),
        forgotPassword: email => dispatch(forgotPassword(email))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (LoginPane))
