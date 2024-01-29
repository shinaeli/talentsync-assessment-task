import React from 'react'

const Shopify = () => {
    const images1 = [
        {
            id: 1,
            image: "images/Image.png",
            width: "160px",
            height: "160px",
            description: "a black boy working on a pc"
        },
        {
            id: 2,
            image: "images/Image(1).png",
            width: "160px",
            height: "240px",
            description: "a white boy working on a laptop"
        },
    ];

    const images2 = [
        {
            id: 1,
            image: "images/Image(2).png",
            width: "198px",
            height: "128px",
            description: "white boys laughing"
        },
        {
            id: 2,
            image: "images/Image(3).png",
            width: "160px",
            height: "240px",
            description: "two girls checking a phone"
        },
        {
            id: 3,
            image: "images/Image(4).png",
            width: "192px",
            height: "128px",
            description: "a coder"
        },
    ];

  return (
    <div className="container shopify">
        <div className="clearlink">
            <div className="shopify-logo-rating">
                <img className="shopify-logo" src="icons/Shopify.com svg.svg" alt="shopify logo" />
                <div className="ratings">
                    <img src="icons/Star icon.svg" alt="star" />
                    <img src="icons/Star icon.svg" alt="star" />
                    <img src="icons/Star icon.svg" alt="star" />
                    <img src="icons/Star icon.svg" alt="star" />
                    <img src="icons/Star icon.svg" alt="star" />
                </div>
            </div>
            <h3 className="text">
                ClearLink has upgraded our remote meetings. 
                High-quality video, screen sharing, and top-notch security make it essential for our team.
            </h3>
            <div className="pmp-arrows">
                <div className="pmp-arrows-img">
                    <img className="pmp-img" src="images/Sarah Thompson.png" alt="a female" />
                    <div className="pmp-text">
                        <h4>Sarah Thompson</h4>
                        <h4>Project Manager, Shopify</h4>
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow">
                        <img className='left-arrow' src="icons/arrow-left.svg" alt="left arrow" />
                    </div>
                    <div className="arrow">
                        <img className='right-arrow' src="icons/arrow-right.svg" alt="right arrow" />
                    </div>
                </div>
            </div>
        </div>
        <div className="groupies">
            <div className="images-1">
                {
                    images1.map(item => {
                        const {id, image, width, height, description} = item;
                        return <img className="shopified-img" style={{width: `${width}`, height: `${height}`}} key={id} src={image} alt={description} />
                    })
                }
            </div>
            <div className="images-2">
                {
                    images2.map(item => {
                        const {id, image, width, height, description} = item;
                        return <img className="shopified-img" style={{width: `${width}`, height: `${height}`}} key={id} src={image} alt={description} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Shopify