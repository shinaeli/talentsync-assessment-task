import React from 'react'
import Button from './utils/Button';

const Communication = () => {
    const checkers = [
        {
            id: 1,
            icon: "icons/Check icon.svg",
            text: "30 days free trial"
        },
        {
            id: 2,
            icon: "icons/Check icon.svg",
            text: "Cancel at any time"
        },
        {
            id: 3,
            icon: "icons/Check icon.svg",
            text: "Access to all features"
        },
        {
            id: 4,
            icon: "icons/Check icon.svg",
            text: "Personalized onboarding"
        },
    ];
    const buttons = [
        {
            id: 1,
            text: "Talk to sales",
            color: "#101828",
            bgColor: "#fff",
            borderColor: "#98A2B3",
        },
        {
            id: 2,
            text: "Start your free trial",
            color: "#fff",
            bgColor: "#175CD3",
        },
    ];
  return (
    <div className="container communication">
        <div className="perfect">
            <h3>Ready to clear the path to perfect communication?</h3>
            {checkers.map(item => {
                const { id, icon, text } = item;
                return (
                    <div className="checkers" key={id}>
                        <img src={icon} alt="checked icon" />
                        <p>{text}</p>
                    </div>
                )
            })}
            {buttons.map(item => {
                const {id, text, color, bgColor, borderColor} = item;
                return <Button key={id} text={text} color={color} bgColor={bgColor} borderColor={borderColor} />
            })}
        </div>
        <div className="screen">
            <img src="images/3_2 screen mockup.png" alt="laptop screen" />
        </div>
    </div>
  )
}

export default Communication