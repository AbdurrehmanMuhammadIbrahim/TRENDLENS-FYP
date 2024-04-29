"use client";
import React, { useEffect, useContext } from "react";
import "./Contact.css"
import HeroBanner from "../../components/HeroBanner/page";
import Header from "../../components/Header/page";
// import AppBar from "../Appbar"
// import Container from '@mui/material/Container';

// import { Paper } from '@mui/material';
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { ImLocation } from "react-icons/im"
// import { Context } from "../../utils/context";
// import { fetchDataFromApi } from "../../utils/api";


export default function Contact() {

  // const {contact,setContact} = useContext(Context);

    // useEffect(() => {
    //     getContact();
        
    //     }, []);
        
      //   const getContact = () => {
      //   fetchDataFromApi("/api/contact-uses?populate=*").then((res) => {
      //     setContact(res);
      //     console.log(res)
      //   });
      // };
  return (
    <div >
      {/* <AppBar /> */}
      {/* <Header/> */}

<HeroBanner name="Contact-Us"/>
      {/* <div className='Div1'>
        <div className='Cnt-Pb-head'>Contact-Us </div>
      </div> */}


      <div className="cont-container">
      {/* {contact?.data?.map((item) => ( */}
        <div className='Cnt-Main'>
          <div className='Cnt-detailed'>
            <h2>Our contact address</h2>
            <p>Thank you for your interest in contacting us. We value your feedback, inquiries, and suggestions. Please feel free to reach out to us using the following contact information:</p>

            <div className='Cnt-detailed-span'>
              {/* <ul> */}

              <div className="Cnt-item">
                {/* <FaPhoneAlt /> */}
                <div className="Cnt-text">Phone:0312 0552255
                 {/* {item.attributes.phoneno} */}
                 </div>
              </div>
              <div className="Cnt-item ">
                {/* <FaEnvelope /> */}
                <div className="Cnt-text">Email: BC200405344@vu.edu.pk
                {/* {item.attributes.email} */}
                </div>
              </div>
              <div className="Cnt-item ">
                {/* <ImLocation /> */}
                <div className="Cnt-text">
                  {/* khkhkhk */}

                {/* {item.attributes.address} */}
                </div>
              </div>
              {/* </ul> */}

              <div>
                <h2>Business Hours:</h2>

                
Monday - Friday: [Opening Time] - [Closing Time]<br/><br/>
Saturday: [Opening Time] - [Closing Time]<br/><br/>
Sunday: [Opening Time] - [Closing Time]<br/>
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



                {/* </Container> */}
              </div>
            </div>
          </div>

        </div>
      {/* ))} */}
      </div>
    </div>
  )
}
