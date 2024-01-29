import React from 'react'
import Button from './utils/Button';
import Navbar from './Navbar';

const Hero = () => {
    const buttons = {
            id: 1,
            hasIcon: false,
            text: "Start your free trial",
            color: "#fff",
            bgColor: "#175CD3"
        };

    const cartoons1 = [
        {
            id: 1,
            image: "images/image 21.png",
            bgColor: "orange",
            description: "old man",
        },
        {
            id: 2,
            image: "images/image 100.png",
            bgColor: "purple",
            description: "dark haired lady",
        },
        {
            id: 3,
            image: "images/image 8.png",
            bgColor: "greenyellow",
            description: "young bearded guy",
        },
    ];

    const cartoons2 = [
        {
            id: 1,
            image: "images/image 72.png",
            bgColor: "#B3B8DB",
            description: "muslim lady",
        },
        {
            id: 2,
            image: "images/image 108.png",
            bgColor: "yellow",
            description: "fat guy",
        },
        {
            id: 3,
            image: "images/image 103.png",
            bgColor: "pink",
            description: "blonde haired lady",
        },
    ];

    const bottomIcons = [
        {
            id: 1,
            icon: "icons/microphone-01.svg",
            description: "microphone icon",
        },
        {
            id: 2,
            icon: "icons/video-recorder.svg",
            description: "video recorder icon",
        },
        {
            id: 3,
            icon: "icons/monitor-01.svg",
            description: "monitor icon",
        },
        {
            id: 4,
            icon: "icons/face-smile.svg",
            description: "happy face icon",
        },
        {
            id: 5,
            icon: "icons/message-text-circle-02.svg",
            description: "message icon",
        },
        {
            id: 6,
            icon: "icons/settings-01.svg",
            description: "settings icon",
        },
    ];

  return (
    <div className="container">
        <Navbar />
        <div className="hero-main">
        <div className="unite">
            <h2 className="unite-header">Uniting the world, one video call at a time</h2>
            <p className="unite-text">
            Experience the future of communication with ClearLink – where crystal-clear video conferencing meets unparalleled simplicity.
            </p>
            <div className="unite-btns">
                <Button key={buttons.id} description={buttons.description} text={buttons.text} color={buttons.color} bgColor={buttons.bgColor} />
                <a className="ai-btn" href="#">
                    <img src="icons/AI icon.svg" alt="AI icon" />
                    Discover AI assistant
                </a>
            </div>
            <div className="unite-avatars">
                <div className="avatar-img">
                    <img src="images/Avatar group.png" alt="avatar faces" />
                </div>
                <div className="stars">
                    <div className="ratings">
                        <img src="icons/Star icon.svg" alt="star" />
                        <img src="icons/Star icon.svg" alt="star" />
                        <img src="icons/Star icon.svg" alt="star" />
                        <img src="icons/Star icon.svg" alt="star" />
                        <img src="icons/Star icon.svg" alt="star" />
                    </div>
                    <p>from 3000+ reviews</p>
                </div>
            </div>
        </div>
        <div className="unite-main-img">
            <div className="cartoons">
                {cartoons1.map(item => {
                    const {id, image, bgColor, description} = item;
                    return (
                        <div key={id} style={{backgroundColor: `${bgColor}`}} className="cartoon-container">
                            <img src={image} alt={description} />
                        </div>
                    )
                })}
            </div>
            <div className="cartoons">
            {cartoons2.map(item => {
                    const {id, image, bgColor, description} = item;
                    return (
                        <div key={id} style={{backgroundColor: `${bgColor}`}} className="cartoon-container">
                            <img src={image} alt={description} />
                        </div>
                    )
                })}
            </div>
            <div className="bottom-icons">
                {
                    bottomIcons.map(item => {
                        const {id, icon, description} = item;
                        return (
                            <div className="icon-container" key={id}>
                                <img src={icon} alt={description} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero;