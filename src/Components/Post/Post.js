import React, {Component} from "react"

export default class Post extends Component {
    constructor() {
        super()

        this.state = {
        title: "",
        img: "",
        content: "",
        author: "",
        authorPicture: ""
        }
    }

    render() {
        return (
            <div>Please Mr. Post Man</div>
        )
    }



}