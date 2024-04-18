"use client";
import React from "react";
import "./footer.css"
// import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "@fortawesome/free-solid-svg-icons";
import FtrImg from "../../assets/img1.jpeg"
import Image from 'next/image';

// import Payment from "../../";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    {/* <div className="title">About</div> */}
                    <div className="ftr-text">
                        {/* Voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo eaque
                        ipsa quae ab illo. */}
                        <Image src={FtrImg} width={100} alt="footerImg"/>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        {/* <FaLocationArrow /> */}
                        <div className="ftr-text">
                            Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha,
                            Kerala, 688006
                        </div>
                    </div>
                    <div className="c-item">
                        {/* <FaMobileAlt /> */}
                        <div className="ftr-text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        {/* <FaEnvelope /> */}
                        <div className="ftr-text">Email: store@jsdev.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="ftr-text">Headphones</div>
                    <div className="ftr-text">Smart Watches</div>
                    <span className="ftr-text">Bluetooth Speakers</span>
                    <span className="ftr-text">Wireless Earbuds</span>
                    <span className="ftr-text">Home Theatre</span>
                    <span className="ftr-text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="ftr-text">Home</span>
                    <span className="ftr-text">About</span>
                    <span className="ftr-text">Privacy Policy</span>
                    <span className="ftr-text">Returns</span>
                    <span className="ftr-text">Terms & Conditions</span>
                    <span className="ftr-text">Contact Us</span>
                   
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="ftr-text">
                        Mindmap 2023 CREATED BY<br/>BC200405344@vu.edu.pk
                        
                    </span>
                    {/* <img src={Payment} /> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;