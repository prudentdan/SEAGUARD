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
                    <h2 className="abouth2Size my-5">Maritime Surveyor & Superintendent</h2>
                    
                    <ul>
                        <li><span className="aboutTitleSpan">(i) Draft Survey Services:</span> Draft survey refer to displacement survey are meant to determine, and quantify the tonnage / quantities of any bulk cargo in the vessel’s hold by mathematical calculations using the ship statistical tables. The draft survey are conducted before and after loading and before and after discharge is completed. </li>
                    </ul>
                    <h3 className="my-5">Relevant: For bulk cargoes such as rice, fertilizer, sugar, wheat, cement, iron ores, gysum, etc.</h3>
                    <ul>
                        <li><span className="aboutTitleSpan">(ii) Bunker/Ullage Survey Services:</span> The bunker survey and ullage involves the determination of the quantities of any liquid cargo in the tanks by mathematical calculations using the ship’s data table. The operations are usually conducted before and after loading, and before and after discharge. 
                        <h3 className="my-5">Relevant: For bulk, wet and liquid cargoes such as oil, chemicals and petroleum products</h3>
                        </li>

                        <li><span className="aboutTitleSpan">(iii) Cargo Inspection Services:</span> The superintendence of a cargo consignment involves the attendance on board the ship, the supervision of the discharge, loading, tally of deliveries, remarks of discrepancies, etc.This service is relevant for bulk and break bulk, large and cased consignment, loading and unloading e.t.c.</li>
                    </ul>
                    <h3 className="my-5">Relevant: Project imports, Iron Rods, Rice, Sugar etc.</h3>
                    <ul>
                        <li><span className="aboutTitleSpan">(iv) Cargo Condition Survey Services:</span> The cargo condition survey services involve the physical examinations of consignment, and stating the statement of fact on the cargo general condition, the remarks and documentation of the cargo during and before change of vendors. Usually when a cargo is subject to many transport and cargo-handling vendors.</li>
                    </ul>
                    <h3 className="my-5">Suitable For terminal operators, transporters, importers, banks/financial e.t.c</h3>
                    <ul>
                        <li><span className="aboutTitleSpan">(v) Cargo Damage/Loss Surveys Services:</span> The survey report services are necessary for damaged and discrepant cargoes. The detailed surveys are conducted to establish the proximate cause, the nature, the quantity damaged, salvage, and recovery and cargo loss adjustment. The damage cargo surveys are conducted for any damage, discrepant and lost cargo</li>
                    </ul>

                    <h3 className="my-5">Relevancy: Any damage cargo and marine claim management.</h3>

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