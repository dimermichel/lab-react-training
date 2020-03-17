import React, { Component } from 'react'

export default class Random extends Component {
    random = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
      }

    render() {
        return (
            <div>
                <strong>Random value between {this.props.min} and {this.props.max} => {this.random(this.props.min, this.props.max)}</strong>
            </div>
        )
    }
}
