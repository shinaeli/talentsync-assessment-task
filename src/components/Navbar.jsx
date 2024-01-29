import React from 'react'
import Button from './utils/Button';

const Navbar = () => {
    const navLinks = [
        {
            id: 1,
            title: "Products",
            icon: "icons/chevron-down.svg",
            hasIcon: true,
        },
        {
            id: 2,
            title: "Solutions",
            icon: "icons/chevron-down.svg",
            hasIcon: true,
        },
        {
            id: 3,
            title: "Resources",
            icon: "icons/chevron-down.svg",
            hasIcon: true,
        },
        {
            id: 4,
            title: "Pricing",
            icon: "icons/chevron-down.svg",
            hasIcon: false,
        },
    ];

    const navBtns = [
        {
            id: 1,
            text: "Talk to sales",
            color: "#101828",
            bgColor: "#fff",
            borderColor: "#98A2B3",
        },
        {
            id: 2,
            text: "Sign up for free",
            color: "#fff",
            bgColor: "#175CD3",
        },
    ];

  return (
    <nav>
        <div className="brand-logo">
            <img src="images/ClearLink.png" alt="clearlink logo" />
        </div>
        <ul className='nav-ul'>
            {navLinks.map(item => {
                const {id, title, icon, hasIcon} = item;
                return (
                    <li key={id}>
                        <a href="#">
                            {title}
                            {hasIcon && <img src={icon} alt="chevron down icon" />}
                        </a>
                    </li>
                )
            })}
        </ul>
        <div className="nav-btns">
            {navBtns.map(item => {
                const {id, text, color, bgColor, borderColor} = item;
                return <Button key={id} text={text} color={color} bgColor={bgColor} borderColor={borderColor} />
            })}
        </div>
    </nav>
  )
}

export default Navbar