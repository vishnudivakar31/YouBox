import React, { Component } from 'react'
import Box from '@material-ui/core/Box'
import LoginPane from '../components/login_pane/LoginPane'
import SignUp from '../components/signup/SignUp'
import { Container } from '@material-ui/core'

class SecurityPage extends Component {
    render() {
        return (
            <Box height='100%'>
                <LoginPane />
                <Container fixed>
                    <SignUp />
                </Container>
            </Box>
        )
    }
}

export default SecurityPage
