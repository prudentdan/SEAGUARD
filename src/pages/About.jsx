import { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    BrowserRouter,
    Routes,
    Link,
    Route
  } from "react-router-dom";

import  '../index.css';
import  '../assets/main.css';

import vision from '../assets/vision.jpg'
import mission from '../assets/mission.jpg'
import value from '../assets/value.avif'

export default function About(){
    return (
        <>
            <Header />
            <div className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <div className="aboutTitleImgOverIn flex items-end">
                        <h2 className="aboutTitle mb-5">ABOUT US</h2>
                    </div>
                </div>
            </div>
            <div className="aboutContentDiv py-9">
                <div className="aboutContentDivIn">
                    <h2 className="abouth2Size">Who we are</h2>
                    <p className="my-5">We are professional cargo superintending, cargo inspecting and cargo surveying company registered in Nigeria and with foreign links. </p>

                    <p className="my-5">By virtue of our operations and services, we represent terminal operators, importers, underwriters and P & I clubs. Our staffs are dedicated, trained and experienced marine surveyors, cargo superintendents and marine claims managers. Our services are specially designed to serve those who valued and take management of their marine risk and marine claims management serious. Our technical services which will take care of all your shipping, port operations, insurance and marine logistics are listed below:</p>
                    <div className="abuotUlparDiv flex items-start justify-start">
                        <ul className="aboutPageUl mx-5"> 
                            <li className="aboutPageLi">Draft Survey Services</li>
                            <li className="aboutPageLi">Bunker/Ullage Survey Services</li>
                            <li className="aboutPageLi">Cargo Inspection Service</li>
                            <li className="aboutPageLi">Cargo Condition Survey</li>
                            <li className="aboutPageLi">Damaged Cargo/ Loss Survey</li>
                            <li className="aboutPageLi">Tallies</li>
                        </ul>
                        <ul className="aboutPageUl aboutulright mx-10">
                            <li className="aboutPageLi">Cargo Monitor/Tracking</li>
                            <li className="aboutPageLi">Port Liaison Services </li>
                            <li className="aboutPageLi">P & I Claims Services</li>
                            <li className="aboutPageLi">Cargo Claims Management</li>
                            <li className="aboutPageLi">Salvage Disposal Management</li>
                            <li className="aboutPageLi">Sales of Tamper Proof Devices such as Seals</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="aboutDivValues pb-5">
                <div className="aboutDivValuesIn flex items-center justify-center">
                    <div className="aboutDivValuesInLeft">
                        <h2 className="h2Size">Our Mission</h2>
                        <p>To provide an excellent Risk Management Services as to position Maritime Risk to remain the first choice in Cargo Surveys & Superintending by using modern information technology and skilled work force.</p>
                    </div>
                    <div className="aboutDivValuesInRight">
                        <img src={mission}/>
                    </div>
                </div>
            </div>
            <div className="aboutDivValues pb-5">
                <div className="aboutDivValuesIn flex items-center justify-center">
                    <div className="aboutDivValuesInRight">
                        <img src={vision}/>
                    </div>
                    <div className="aboutDivValuesInLeft">
                        <h2 className="h2Size">Our Vision</h2>
                        <p>To provide an excellent Risk Management Services as to position Maritime Risk to remain the first choice in Cargo Surveys & Superintending by using modern information technology and skilled work force.</p>
                    </div>
                </div>
            </div>
            <div className="aboutDivValues pb-5">
                <div className="aboutDivValuesIn flex items-center justify-center">
                    <div className="aboutDivValuesInLeft">
                        <h2 className="h2Size">Our Value</h2>
                        <p>To provide an excellent Risk Management Services as to position Maritime Risk to remain the first choice in Cargo Surveys & Superintending by using modern information technology and skilled work force.</p>
                    </div>

                    <div className="aboutDivValuesInRight">
                        <img src={value}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}