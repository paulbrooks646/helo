import React, {Component} from "react"


export default class Nav extends Component {
    constructor() {
        super()

        this.state = {

        }
    }

    render() {
        const navbar = this.props.location
        if (navbar === "/") {
      return (
        <div></div>
      )}
    else {
        return (
            <div><nav><button>Home</button><button>New Post</button><button>Logout</button></nav></div>
        )
    }}}



