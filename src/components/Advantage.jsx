import React from 'react'

const Advantage = () => {
    const iconContents1 = [
        {
            id: 1,
            title: "Crystal-clear HD video",
            icon: "icons/video-recorder.svg",
            text: "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
            description: "video recorder icon"
        },
        {
            id: 2,
            title: "Scheduling made easy",
            icon: "icons/calendar.svg",
            text: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
            description: "calendar icon"
        }
    ];

    const iconContents2 = [
        {
            id: 1,
            title: "Noise-canceling audio",
            icon: "icons/recording-01.svg",
            text: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
            description: "recorder icon"
        },
        {
            id: 2,
            title: "Bank-grade security",
            icon: "icons/lock-unlocked-04.svg",
            text: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
            description: "locker icon"
        }
    ];

  return (
    <div className="container advantage">
        <div className="advantage-header">
            <div className="header-content">
                <h4>The ClearLink Advantage</h4>
                <h2>Why choose ClearLink?</h2>
                <p>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</p>
            </div>
            <div className="curled-arrow">
                <img src="images/Hand-drawn arrow.png" alt="hand drawn arrow" />
            </div>
        </div>
        <div className="images-icon-content">
            <div className="icon-content">
                {iconContents1.map(item => {
                    const {id, title, icon, text, description} = item;
                    return (
                        <div className="icon-content-main" key={id}>
                            <div className="icon-container">
                                <img src={icon} alt={description} />
                            </div>
                            <h4>{title}</h4>
                            <p>{text}</p>
                        </div>
                    )
                })}
            </div>
            <div className="icon-content">
                {iconContents2.map(item => {
                        const {id, title, icon, text, description} = item;
                        return (
                            <div className="icon-content-main" key={id}>
                                <div className="icon-container">
                                    <img src={icon} alt={description} />
                                </div>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </div>
                        )
                    })}
            </div>
            <div className="groupie-smiles">
                <img src="images/Rectangle 1.png" alt="smiling faces" />
            </div>
        </div>
    </div>
  )
}

export default Advantage