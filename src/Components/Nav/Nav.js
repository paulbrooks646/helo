import React, {Component} from "react"
import {Link, withRouter} from 'react-router-dom'
import { logoutUser } from "../../ducks/reducer"
import axios from 'axios'
import {connect} from "react-redux"



class Nav extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    logoutUser() {
        axios.delete('/api/logout').then(() => {
        this.props.logoutUser()
        this.props.history.push('/')})}
    

    render() {
        const navbar = this.props.location.pathname
        if (navbar === "/") {
      return (
        <div></div>
      )}
    else {
        return (
            <div>
                <nav>
                    <Link to="dashboard">
                        <button>Home</button>
                    </Link>
                    <Link to="/new">
                        <button>New Post</button>
                    </Link>
                    
                        <button onClick={()=> this.logoutUser()}>Logout</button>
                    
                </nav>
            </div>
        )
    }}}
    const mapStateToProps = reduxState => reduxState

    export default withRouter(connect(mapStateToProps, {logoutUser})(Nav))



