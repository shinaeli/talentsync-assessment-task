import React from 'react'

const Button = ({ hasIcon, iconLocation, description, text, color, bgColor, borderColor }) => {
  return (
    <button type="button" style={{color: `${color}`, backgroundColor: `${bgColor}`, borderColor: `${borderColor}`}}>{hasIcon && <img src={iconLocation} alt={description} />}{text}</button>
  )
}

export default Button