"use client";
import React, { useEffect, useContext } from "react";
import "./Contact.css"
import HeroBanner from "../../components/HeroBanner/page";
import Header from "../../components/Header/page";



export default function Contact() {

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


          <div className='Cnt-Que'>
            <h2>Do you have any questions?
            </h2>


            <div className='Cnt-inp'>
              {/* <Paper elevation={2}> */}
              <div className="cont-container">

                <div className='Cnt-inp-name'>
                  <input placeholder='Name' id='InpID'></input>
                  <input placeholder='Last Name' id='InpID'></input>
                </div>

                <input placeholder='Your Email' id='InpID'></input>
                <input placeholder='Your Subject' id='InpID'></input>
                <textarea placeholder='Your message' type="textarea" id='InpID'></textarea>

                <div className='Cnt-Btn'> Submit</div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
