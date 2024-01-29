import React, { useState } from 'react'
import { linksHeader } from '../data/contactsLinks'

const Contacts = () => {
    const [links] = useState(linksHeader);
    const apps = [
        {
            id: 1,
            app: "images/Apple Store.png",
            description: "Apple Store Logo",
        },
        {
            id: 2,
            app: "images/Google Play Store.png",
            description: "Google Store Logo",
        }
    ];
    
  return (
    <div className="container contacts">
        <div className="gateway">
            <div className="main-logo">
                <img src="images/ClearLink.png" alt="clearlink logo" />
            </div>
            <p>ClearLink is your gateway to effortless, high-quality video conferencing. Join us in shaping the future of communication!</p>
        </div>
        <div className="contact-links">
            {
                links.map(item => {
                    const {id, title, subLinks} = item;
                    return(
                        <div key={id}>
                            <h3>{title}</h3>
                            {subLinks.map(item => {
                                const {id, link} = item;
                                return (
                                    <li key={id}>
                                        <a href="#">{link}</a>
                                    </li>
                                )
                            })}
                        </div>
                    )
                })
            }
        </div>
        <div className="get-apps">
            <h4>Get the app</h4>
            {
                apps.map(item => {
                    const {id, app, description} = item;
                    return (
                        <li key={id}>
                            <a href="#">
                                <img src={app} alt={description} />
                            </a>
                        </li>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Contacts