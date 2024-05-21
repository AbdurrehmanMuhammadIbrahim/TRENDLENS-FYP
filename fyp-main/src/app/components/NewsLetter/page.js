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

    // const [formData, setFormData] = useState({
    //     email: '',
    // });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };


    const handleSubmit = async (e) => {
        // console.log(formData)
        e.preventDefault();


        // const formDataToSend = new FormData(); // Use FormData for multipart data
        // formDataToSend.append('data', JSON.stringify({
        //     email: formData.email,


        // }));
        // console.log("email", formDataToSend)


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

// // components/NewsletterSubscription.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const NewsletterSubscription = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:1337/api/newsletters', {
//         data: { email },
//       });
//       setMessage('Subscription successful! Thank you for subscribing.');
//       setEmail('');
//     } catch (error) {
//       console.error('Error subscribing:', error);
//       setMessage('Error subscribing. Please try again.');
//     }
//   };

//   return (
//     <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-6 text-center">Subscribe to our Newsletter</h2>
//       {message && <p className="mb-4 text-center">{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewsletterSubscription;