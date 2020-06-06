import React, {Component} from "react"
import {Link, withRouter} from 'react-router-dom'



class Nav extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

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
                    <Link to="/">
                        <button>Logout</button>
                    </Link>
                </nav>
            </div>
        )
    }}}

    export default withRouter(Nav)



