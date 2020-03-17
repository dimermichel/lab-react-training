import React from 'react'
import './DriverCard.css'
import Rating from '../rating/Rating'

const DriverCard = props => {

    const {name, rating, img, car} = props;

    return (
        <div className="DriverCard">
            <img className="Img" src={img} alt="profile" />
            <div><h2>{name}</h2><Rating>{rating}</Rating>
            <p>{car.model} - {car.licensePlate}</p></div>
        </div>
    )
}

export default DriverCard;
