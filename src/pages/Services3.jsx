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

import aboutBack from '../assets/about.png'

import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import portfolio3 from '../assets/portfolio3.jpg'


export default function About(){
    return (
        <>
            <Header />
            <div className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <div className="aboutTitleImgOverIn flex items-end">
                        <h2 className="aboutTitle mb-5">OUR SERVICE</h2>
                    </div>
                </div>
            </div>
            <div className="aboutContentDiv py-9">
                <div className="aboutContentDivIn">
                    <h2 className="abouth2Size my-5">Claims & Loss Recovery</h2>
                    <p className="my-5">Having to make an Insurance Claim can often be a complicated and time consuming process. Oakleafe Claims Loss Assessors specialise in Insurance Claims Management and only represent the policyholder. We have an extensive experience in all manner of claims and values. As Loss Assessors our mandate is to ensure the policyholder receives their full entitlement after we settle their Insurance Claim.
                    </p>

                    <p className="my-5">Our services covers but not limited to liabilities, expenses, and costs for:</p>
                    <ul className="aboutPageUl mx-5">
                        <li className="aboutPageLi">
                        Loss of life, injury and illness of crew,</li>
                        <li className="aboutPageLi">passengers and other persons</li>
                        <li className="aboutPageLi">Cargo loss, shortage or damage</li>
                        <li className="aboutPageLi">Collision</li>
                        <li className="aboutPageLi">Damage to docks, buoys and other fixed and floating objects</li>
                        <li className="aboutPageLi">Wreck removal</li>
                        <li className="aboutPageLi">Pollution</li>
                        <li className="aboutPageLi">Fines and penalties</li>
                        <li className="aboutPageLi">Mutiny and misconduct by crew</li>
                        <li className="aboutPageLi">Crew repatriation and substitution</li>
                        <li className="aboutPageLi">Damage to property on board the insured vessel</li>
                        <li className="aboutPageLi">Quarantine</li>
                        <li className="aboutPageLi">Vessel Diversion Expenses</li>
                        <li className="aboutPageLi">Unrecoverable General Average contributions</li>
                        <li className="aboutPageLi">Vessel’s proportion of General Average</li>
                    </ul>
                    <div className="picsServiceDivIn">
                        <div className="picsServiceDivInImgDiv flex items-center justify-center gap-10">
                            <img src={portfolio1} class="picsServiceDivInImg"/>
                            <img src={portfolio2} class="picsServiceDivInImg"/>
                            <img src={portfolio3} class="picsServiceDivInImg"/>
                        </div>
                    </div>
                    
                </div>
            </div>
           
            <Footer />
        </>
    )
}