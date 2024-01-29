import React, { useState } from 'react'

const FAQ = () => {
    const [toggleTab, setToggleTab] = useState(0);
    const accordions = [
        {
          id: 1,
          question: "How many participants can join a ClearLink video conference?",
          answer: `ClearLink offers flexible meeting options. 
          Depending on your subscription plan, you can host meetings with varying numbers of participants. 
          Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.`
        },
        {
          id: 2,
          question: "Can I use ClearLink on multiple devices?",
          answer: `ClearLink offers flexible meeting options. 
          Depending on your subscription plan, you can host meetings with varying numbers of participants. 
          Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.`
        },
        {
          id: 3,
          question: "Is ClearLink compatible with other video conferencing platforms?",
          answer: `ClearLink offers flexible meeting options. 
          Depending on your subscription plan, you can host meetings with varying numbers of participants. 
          Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.`
        },
        {
          id: 4,
          question: "Do I need to download any software to use ClearLink?",
          answer: `ClearLink offers flexible meeting options. 
          Depending on your subscription plan, you can host meetings with varying numbers of participants. 
          Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.`
        },
        {
          id: 5,
          question: "What kind of customer support does ClearLink provide?",
          answer: `ClearLink offers flexible meeting options. 
          Depending on your subscription plan, you can host meetings with varying numbers of participants. 
          Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.`
        },
      ];

  return (
    <div className="container faq">
        <div className="faqs">
            <h3>Support</h3>
            <h2>FAQs</h2>
            <p>
                Everything you need to know about the product and billing. 
                Can’t find the answer you’re looking for? Please <a href="#">chat to our friendly team</a>.
            </p>
        </div>
        <div className="accordion-container">
                  {
                    accordions.map((item, index) => {
                      const { id, question, answer } = item;
                        return (
                          <div className="accordion" key={id}>
                            <div className="question-flexed">
                              <h3>{question}</h3>
                              <div className="circle">
                                <img className={toggleTab === index + 1 ? "minus-circle" : "img"} onClick={() => setToggleTab(index+1)} src={toggleTab === index + 1 ? "icons/minus-circle.svg" : "icons/plus-circle.svg"} alt="circle icon" />
                              </div>
                            </div>
                            <div className={toggleTab === index + 1 ? "show-answer" : "answer"}>
                              <p>{answer}</p>
                            </div>
                          </div>
                        )
                    })
                  }
                </div>
    </div>
  )
}

export default FAQ