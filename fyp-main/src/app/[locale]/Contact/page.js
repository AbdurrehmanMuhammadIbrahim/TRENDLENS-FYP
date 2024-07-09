"use client";
import React, { useEffect, useState } from "react";
import "./Contact.css"
import HeroBanner from "../../components/HeroBanner/page";
import Header from "../../components/Header/page";
import emailjs from '@emailjs/browser';



export default function Contact() {
  const [userInput, setUserInput] = useState({});

  const formSubmitHandler = (e) => {
      e.preventDefault();
      emailjs
      .send(
        "service_c40hm1c", // Service ID
        "template_hztao8e", // Template ID
        userInput,
            "_zq_5l9zP9wkLJ6kL" // Public Key - https://dashboard.emailjs.com/admin/account
      )
      // Below credentials are required to link your email id with contact form you can create your credentials in emailjs.com
     
          .then((response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("email is send successfully")
          })
          .catch((err) => {
              console.log("FAILED...", err);
              alert("please retry")
          });
  };

  
  const onChange = (e) => {
      let obj = { ...userInput, [e.target.name]: e.target.value };
      setUserInput(obj);
  };
  return (
    <div >


      <HeroBanner name="Contact-Us" />



      <div className="cont-container">
        <div className='Cnt-Main'>
          <div className='Cnt-detailed'>
            <h2>Our contact address</h2>
            <p>Thank you for your interest in contacting us. We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the following contact information:</p>

            <div className='Cnt-detailed-span'>

              <div className="Cnt-item">
                <div className="Cnt-text">Phone:0312 0552255
                </div>
              </div>
              <div className="Cnt-item ">
                <div className="Cnt-text">Email: BC200405344@vu.edu.pk
                </div>
              </div>
              <div className="Cnt-item ">
                <div className="Cnt-text">

                </div>
              </div>


              <div>
                <h2>Business Hours:</h2>


                Monday - Friday: [9:00] - [5:00]<br /><br />
                Saturday: [9:00] - [2:00]<br /><br />
                Sunday: [9:00] - [2:00]<br />
              </div>
            </div>
          </div>

          <form
            
                onSubmit={formSubmitHandler}
            >
          <div className='Cnt-Que'>
            <h2>Do you have any questions?
            </h2>


            <div className='Cnt-inp'>
              {/* <Paper elevation={2}> */}
              <div className="cont-container">

                <div className='Cnt-inp-name'>
                  <input name="from_name"  onChange={onChange} placeholder='Name' id='InpID'></input>
                  <input name="from_lastname"  onChange={onChange} placeholder='Last Name' id='InpID'></input>
                </div>

                <input name="from_email"  onChange={onChange}  placeholder='Your Email' id='InpID'></input>
                <input name="email_subject" onChange={onChange}  placeholder='Your Subject' id='InpID'></input>
                <textarea  onChange={onChange} name="message" placeholder='Your message' type="textarea" id='InpID'></textarea>

                <button className='Cnt-Btn'> Submit</button>

              </div>
            </div>
          </div>
</form>
        </div>
      </div>
    </div>
  )
}
