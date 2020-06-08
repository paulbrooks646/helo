import React, {Component} from "react"
import axios from "axios"
import {connect} from 'react-redux'
import {loginUser, registerUser} from "../ducks/reducer"


class Auth extends Component {
    constructor() {
        super()

        this.state = {
        username: "",
        password: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    login = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        axios.post('/api/auth/login', {username, password}).then( res => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')}).catch( err => { alert('could not login')})
    }

    register = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        axios.post('/api/auth/register', {username, password}).then( res => {
            this.props.registerUser(res.data)
            this.props.history.push('/dashboard')}).catch( err => { alert('could not register')})
    }
        
    render() {
        const {username, password} = this.state
        return (
            <div className="authbackground">
                <div className="loginbox">
                    <div className="head">
                        <div classname="eyes">
                            <div className="lefteye"></div>
                            <div className="righteye"></div>
                        </div>
                        <div className="smile"></div>
                    </div>
                    <h1>Helo</h1>
                    <div className="usernameInput">
                        <label>Username:</label>
                        <input
                            type="text" 
                            placeholder=""
                            name="username"
                            value={username}
                            onChange={e => this.changeHandler(e)}/>
                    </div>
                    <div className="passwordInput">
                        <label>Password:</label>
                        <input
                            type="password"
                            placeholder=""
                            name="password"
                            value={password}
                            onChange={e => this.changeHandler(e)}/>
                    </div>
                    <div className="buttons">
                        <input
                            className="loginButton"
                            type="submit"
                            value="Login"
                            onClick={(e) => this.login(e)}/>
                        <input
                            className="registerButton"
                            type="submit"
                            value="Register"
                            onClick={(e) => this.register(e)}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = {loginUser, registerUser}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)