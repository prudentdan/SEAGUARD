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
import portfolio4 from '../assets/portfolio4.jpg'
import portfolio5 from '../assets/portfolio5.jpg'
import portfolio6 from '../assets/portfolio6.jpg'

export default function ProjectGallery(){
    return (
        <>
            <Header />
            <div className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <div className="aboutTitleImgOverIn flex items-end">
                        <h2 className="aboutTitle mb-5">Project Gallery</h2>
                    </div>
                </div>
            </div>
            <div className="portfolioDiv">
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Bulk Cargo</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Claims</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Colls Project</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Inspection</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Oil , Bunkering, Ship-to-Ship (S2S)</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Cargo project</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Rice, Imports & Exports</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
                <div className="portfolioDivIn">
                    <h2 className="portfolioH2">Salvage</h2>
                    <div className="portfolioDivImg flex items-center justify-center gap-10">
                        <img src={portfolio1}/>
                        <img src={portfolio2}/>
                        <img src={portfolio3}/>
                        {/* <img src={portfolio4}/>
                        <img src={portfolio5}/>
                        <img src={portfolio6}/> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}