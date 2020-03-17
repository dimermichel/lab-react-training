import React, { Component } from 'react'

export default class Greetings extends Component {
    greetings = {
        de: "Hallo",
        fr: "Bonjour",
        en: "Hello",
        br: "Oi"
    }

    render() {
        return (
            <div>
                {this.greetings[this.props.lang]} {this.props.children}    
            </div>
        )
    }
}
