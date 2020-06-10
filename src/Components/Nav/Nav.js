import React, { Component } from "react"
import {Link, withRouter} from 'react-router-dom'
import { logoutUser } from "../../ducks/reducer"
import axios from 'axios'
import {connect} from "react-redux"
import {getUser} from '../../ducks/reducer'



class Nav extends Component {
    constructor() {
        super()

        this.state = {

        }
    }
    componentDidMount() {
        this.props.getUser()
    }

   

    logoutUser() {
        axios.delete('/api/logout').then(() => {
        this.props.logoutUser()
        this.props.history.push('/')})}
    

    render() {
        console.log(this.props)
        const navbar = this.props.location.pathname
        if (navbar === "/") {
      return (
        <div></div>
      )}
    else {
        return (
            
                <nav>
                    <div className="navbarmain">
                        <img className="profilepic" src={this.props.user.profile_pic} alt="Please Add Yours"/>
                        <h4>{this.props.user.username}</h4>
                        <Link to="/dashboard">
                            <button className="homebutton">Home</button>
                        </Link>
                        <Link to="/new">
                            <button className="postbutton">New Post</button>
                        </Link>
                    </div>
                    <img alt="Logout" src="data:image/png;base64,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" className="logoutbutton" onClick={()=> this.logoutUser()}/>
                </nav>
            
        )
    }}}
    const mapStateToProps = reduxState => reduxState

    export default withRouter(connect(mapStateToProps, {logoutUser, getUser})(Nav))



