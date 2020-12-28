import React, { Component } from 'react'
import HomeHeader from '../components/home_header/HomeHeader'
import HomeNavigation from '../components/home_nav/HomeNavigation'
import { Box } from '@material-ui/core'
import { unSetUser } from '../redux/user_reducer/action'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nav_tab: 0
        }
        this.setNavTab = this.setNavTab.bind(this)
        this.tabRenderer = this.tabRenderer.bind(this)
    }
    
    componentDidMount() {
        if(this.props.user.userId.length === 0) {
            this.props.history.push('/')
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user !== this.props.user && this.props.user.userId.length === 0) {
            this.props.history.push('/')
        }
    }

    setNavTab(tabIndex) {
        this.setState({ nav_tab: tabIndex })
    }

    tabRenderer() {
        if(this.state.nav_tab === 0) {
            return (
                <div>My Collection</div>
            )
        } else if(this.state.nav_tab === 1) {
            return (
                <div>Favourites</div>
            )
        } else if(this.state.nav_tab === 2) {
            return (
                <div>Trending</div>
            )
        } else if(this.state.nav_tab === 3) {
            return (
                <div>Recent</div>
            )
        }
    }

    render() {
        return (
            <Box>
                <HomeHeader 
                    name={this.props.user.name}
                    logout={this.props.unSetUser}
                />
                <HomeNavigation 
                    navigation={this.setNavTab}
                />
                <Box>
                    {this.tabRenderer()}
                </Box>
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
        unSetUser: () => dispatch(unSetUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (HomePage))
