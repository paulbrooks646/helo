import React, {Component} from "react"
import axios from "axios"

export default class Auth extends Component {
    constructor() {
        super()

        this.state = {
        username: "",
        password: ""
        }
    }

    usernameInput(val) {
        this.setState({
            username: val
        })
    }

    passwordInput(val) {
        this.setState({
            password: val
        })
    }
    login(username, password) {
        console.log(`My name is ${username} and my password is ${password}`)
        this.setState({
            username: "",
            password: ""
        })

    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="username" onChange={e => this.usernameInput(e.target.value)} />
                    <input type="password" placeholder="password" onChange={e => this.passwordInput(e.target.value)}/>
                    <button onClick={e => this.login(this.state.username, this.state.password)}>Login</button>
                </form>
            </div>
        )
    }



}