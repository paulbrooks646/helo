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
                        <img className="profilepic" src="https://robohash.org/4H1.png?set=set1&size=150x150" alt=""/>
                        <h4>Profile Name</h4>
                        <Link to="dashboard">
                            <button className="homebutton">Home</button>
                        </Link>
                        <Link to="/new">
                            <button className="postbutton">New Post</button>
                        </Link>
                    </div>
                    <img alt="" src="https://lh3.googleusercontent.com/proxy/Tta5QSCQyN271RnWyfKJRVOup3BSjpvo_DTTW3ek2o19yYA5cOLiwqwrfyKrz8g4C0Du-hFXz7UcVUHLJQqChdxAj-0eFVNSpFqTXeGBRSdhlZf0Yc8Q5hYzthw" className="logoutbutton" onClick={()=> this.logoutUser()}/>
                </nav>
            
        )
    }}}
    const mapStateToProps = reduxState => reduxState

    export default withRouter(connect(mapStateToProps, {logoutUser})(Nav))



