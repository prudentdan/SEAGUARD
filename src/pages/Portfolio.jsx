import { useState , useEffect } from 'react'
import Header from '../components/Header';
import PorftolioComponent from '../components/PorftolioComponent';
import Footer from '../components/Footer';
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import  '../index.css';
import  '../assets/main.css';



export default function Portfolio(){

    return (
        <>
            <Header />
            <div className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <div className="aboutTitleImgOverIn flex items-end">
                        <h2 className="aboutTitle mb-5">Portfolio</h2>
                    </div>
                </div>
            </div>
            <PorftolioComponent />    

            <Footer /> 
        </>
    )
}
