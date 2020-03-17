import React from 'react'

const Rating = props => {
    const numberOfStars = Math.round(props.children)

    const displayStars = () => {
        let str = "★".repeat(numberOfStars);
        if (str.length < 6) str += "☆".repeat(5 - str.length)
        return str;
    }

    return (
        <div>
            {displayStars()}
        </div>
    )
}

export default Rating;
