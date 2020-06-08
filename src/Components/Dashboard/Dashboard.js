import React, {Component} from "react"
import {connect} from 'react-redux'
import {getUser} from '../redux/reducer'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
posts: [],
search: "",
userposts: true
        }
    }
    componentDidMount() {
        this.props
    }

    render() {
        return (
            <div className="dashboard">Welcome {this.props.user.username}</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUser})(Dashboard)