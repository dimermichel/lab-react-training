import React, { Component } from 'react'
import './IdCard.css'

export default class IdCard extends Component {
    render() {
        return (
            <div className='flex'>
                <img src={this.props.picture} alt={this.props.firstName}/>
                <div>
                    <strong>Name:</strong> {this.props.lastName} {this.props.firstName}<br></br>
                    <strong>Gender:</strong> {this.props.gender}<br></br>
                    <strong>Height:</strong> {(this.props.height)/100}m<br></br>
                    <strong>Birthday:</strong> {(this.props.birth).toDateString()}
                </div>
            </div>
        )
    }
}
