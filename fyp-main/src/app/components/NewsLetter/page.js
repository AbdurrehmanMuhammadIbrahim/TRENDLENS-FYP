import React, { useState, useEffect, useContext } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import axios from "axios";
import "./NewsLetter.css";


const Newsletter = () => {
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();



        try {

            const response = await axios.post(
                "http://localhost:1337/api/newsletters",
                {
                  data: { email },       
                
                });
            console.log('Email created successfully', response.data);
      setMessage('Subscription successful! Thank you for subscribing.');

            setEmail('');

        } catch (error) {
      console.error('Error subscribing:', error);
      setMessage('Error in subscribing. Please try again.');
}


    };

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates
                </span>
                <div className="form">
                    <input type="email" name="email"
                     value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
placeholder="Email Address" className="form-inp" />
                    <div className="form-btn" onClick={handleSubmit}>Subscribe</div>
                  
                </div>
                {message && <span style={{color:"white"}}>{message}</span>}
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        {/* <FontAwesomeIcon icon={faCoffee} /> */}
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
