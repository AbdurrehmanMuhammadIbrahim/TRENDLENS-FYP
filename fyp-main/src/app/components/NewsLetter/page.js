import React,{useState,useEffect,useContext} from "react";
import {
    FaFacebookF ,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import axios from "axios";
import "./NewsLetter.css";
// import Newsletter from "@strapi-newsletter/react";


const Newsletter = () => {

    const [formData, setFormData] = useState({
        Email: '',
       
   
      });
      
      const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
      
      const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();
      
      
  const formDataToSend = new FormData(); // Use FormData for multipart data
  formDataToSend.append('data', JSON.stringify({
    Email: formData.Email,
  

  }));
  console.log("Email",formDataToSend)

  // formDataToSend.append('files.image', formData.image); // Append image file


  try {

    const response = await axios.post(
        "http://localhost:1337/strapi-newsletter/newsletter/subscribe",
        {
            email: formData.Email,
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    console.log('Email created successfully', response.data);
   


  } catch (error) {
    console.error('Error creating Email:', error);
    alert("please write right credentials" , error)
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
                    <input type="text" name="Email" value={formData.Email} onChange={handleChange} placeholder="Email Address" className="form-inp"/>
                    <div  className="form-btn" onClick={handleSubmit}>Subscribe</div>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaFacebookF  size={14} />
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