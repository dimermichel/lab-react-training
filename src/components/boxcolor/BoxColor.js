import React from 'react'

const BoxColor = (props) => {
    const {r,g,b} = props;

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        textAlign: 'center'
    };

    const rgbToHex = num => { 
        var hex = Number(num).toString(16);
        if (hex.length < 2) {
             hex = "0" + hex;
        }
        return hex;
      };

    const fullColorHex = (r,g,b) => {   
        var red = rgbToHex(r);
        var green = rgbToHex(g);
        var blue = rgbToHex(b);
        return red+green+blue;
      };

    return (
        <div style={divStyle}>
            rgb({r},{g},{b}) <br />
            #{fullColorHex(r,g,b)}
        </div>
    )
}

export default BoxColor;