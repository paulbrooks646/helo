import React, {Component} from "react"

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
        title: "",
        img: "",
        content: ""
        }
    }

    render() {
        return (
            <div>This is the greatest Form</div>
        )
    }



}