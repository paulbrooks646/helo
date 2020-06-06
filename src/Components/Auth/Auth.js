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

    changeHandler = (e) => {
        this.setState({
           [e.target.name]: e.target.value 
        })
    }

    login = (e) => {
        e.preventDefault();
        const {username, password} = this.state
        axios.post('/api/auth/login', {username, password}).then( res => {this.props.history.push('/dashboard')}).catch( err => { alert('could not login')})
    }
        
    render() {
        const {username, password} = this.state
        return (
            <div>
                <form onSubmit={(e)=> this.login(e)}>
                    
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
                        value="Login"/>
                    <input
                        type="submit"
                        value="Register"/>
                </form>
            </div>
        )
    }



}