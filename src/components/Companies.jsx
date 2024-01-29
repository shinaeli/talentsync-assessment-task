import React from 'react'

const Companies = () => {
    const companies = [
        {
            id: 1,
            imgLocation: "icons/Shopify.com svg.svg",
            name: "Shopify"
        },
        {
            id: 2,
            imgLocation: "icons/Coinbase svg.svg",
            name: "Coinbase"
        },
        {
            id: 3,
            imgLocation: "icons/Dropbox svg.svg",
            name: "Dropbox"
        },
        {
            id: 4,
            imgLocation: "icons/Intercom svg.svg",
            name: "Intercom"
        },
        {
            id: 5,
            imgLocation: "icons/Marvel svg.svg",
            name: "Marvel"
        },
        {
            id: 6,
            imgLocation: "icons/Automattic svg.svg",
            name: "Automattic"
        },
    ]
  return (
    <div className="companies">
        <h4 className="companies-header">Join 1,500+ companies already video conferencing the ClearLink way</h4>
        <div className="company-links">
            <ul>
                {companies.map(item => {
                    const { id, imgLocation, name } = item;
                    return (
                    <li key={id}>
                        <a href="#">
                            <img src={imgLocation} alt={name} />
                        </a>
                    </li>)
                })}
            </ul>
        </div>
    </div>
  )
}

export default Companies