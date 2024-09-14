import React from 'react'
import './About.css';
import { PiFigmaLogoFill } from "react-icons/pi";

const About = () => {
  return (
    <div className='app_about '>
      <div className="about_header">
        {/* Blurred placeholders for images/icons */}
        <div className="icon blur"><PiFigmaLogoFill/></div>
        <div className="icon blur"></div>
        <div className="icon blur"></div>
      </div>
    <div className="fruit-ai-container">
      <div className="content">
        <h1>Fruit.AI</h1>
        <p>
          Whether you're looking to discover new fruits, understand their
          nutritional values, or find the perfect fruit for your diet, our
          AI-driven chatbot is here to assist. We provide personalized fruit
          recommendations tailored to your health needs, making it easier for
          you to integrate the best fruits into your daily routine.
        </p>
        <button className="about-button">About</button>
      </div>
    </div>
    </div>
  )
}

export default About