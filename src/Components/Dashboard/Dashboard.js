import React, {Component} from "react"
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
posts: [],
search: "",
userposts: true
        }
    }

    render() {
        return (
            <div>Welcome {this.props.user.username}</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Dashboard)