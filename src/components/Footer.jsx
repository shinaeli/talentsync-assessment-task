import React from 'react'

const Footer = () => {
    const links = [
        {
            id: 1,
            linkName: "www.linkedin.com",
            icon: "icons/LinkedIn.svg",
            description: "linkedin",
        },
        {
            id: 2,
            linkName: "www.twitter.com",
            icon: "icons/Twitter.svg",
            description: "twitter",
        },
        {
            id: 3,
            linkName: "www.facebook.com",
            icon: "icons/Facebook.svg",
            description: "facebook",
        },
        {
            id: 4,
            linkName: "www.instagram.com",
            icon: "icons/Instagram.svg",
            description: "instagram",
        },
        {
            id: 5,
            linkName: "www.github.com",
            icon: "icons/Github.svg",
            description: "github",
        },
        {
            id: 6,
            linkName: "www.youtube.com",
            icon: "icons/Youtube.svg",
            description: "youtube",
        },
    ];

  return (
    <div className="container footer">
        <div className="copyright">
            <p>&copy;2024. All rights reserved</p>
        </div>
        <div className="footer-links">
            <ul>
                {
                    links.map(item => {
                        const {id, linkName, icon, description} = item;
                        return (
                            <li key={id}>
                                <a href={`https://${linkName}`}>
                                    <img src={icon} alt={description} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Footer