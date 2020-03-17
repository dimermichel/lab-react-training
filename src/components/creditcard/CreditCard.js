import React from 'react'
import './CreditCard.css'

const CreditCard = props => {
    const {type, number, expirationMonth, expirationYear,
     bank, owner, bgColor, color} = props;

     const styleCard = {
         backgroundColor: bgColor,
         color: color
     }

    return (
        <div className="CreditCard" style={styleCard}>
            <div className="type"><img src={type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'} alt="logo"/></div>
            <div className="number"> ∙∙∙∙ ∙∙∙∙ ∙∙∙∙ {number.slice(-4)}</div>
            <div className="expires-bank"><span>Expires {expirationMonth}/{expirationYear} </span><span className="bank">{bank}</span></div>
            <div className="owner">{owner}</div>
        </div>
    )
}

export default CreditCard;
