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
        console.log("COWABUNGA", this.props)
        return (
            <div>
                <input
                        type="text" 
                        placeholder="username"
                        name="username"
                        value={username}
                        onChange={e => this.changeHandler(e)}/>
                <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={e => this.changeHandler(e)}/>
                <input
                        type="submit"
                        value="Login"
                        onClick={(e) => this.login(e)}/>
                <input
                        type="submit"
                        value="Register"
                        onClick={(e) => this.register(e)}/>
                
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

const mapDispatchToProps = {loginUser, registerUser}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)