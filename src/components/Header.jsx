
import {
    Link,
  } from "react-router-dom";

import '../assets/header.css';

import logo from '../assets/logo.png'
import phone from '../assets/Phone.png'
import mail from '../assets/Mail.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter-square.png'
import linkedIn from '../assets/linkedin.png'
import { Button, IconButton } from "@mui/material";

export default function Header(){

    return (
        <>
        <header className="header">
          
            <div className="headerTop">
                <div className="headerTopDivIn">
                    <div className="headerTopInfo flex items-center justify-center" style={{ gap: 32}}>
                        <span className=" flex items-center justify-left rounded-full pointer">
                           <img src={phone} alt="" />
                            <span style={{ fontSize: 16, marginLeft: 16}} className="pointer button-hover">+234-8097-4434-22</span>
                        </span>

                        <span className="flex items-center justify-left rounded-full pointer headerMail">
                            <img src={mail} alt="" />
                            <span style={{ fontSize: 16, marginLeft: 16}} className="pointer button-hover">info@seaguardservices.com.ng</span>
                        </span>
                        
                    </div>

                    <div className="HeaderIcon flex items-center justify-center" style={{ gap: 24}}>
                        <a href="#" style={{ textDecoration: 'none'}}>
                            <img src={youtube} alt="" />
                        </a>

                        <a href="#" style={{ textDecoration: 'none'}}>
                            <img src={facebook} alt="" />
                        </a>

                        <a href="#" style={{ textDecoration: 'none'}}>
                            <img src={twitter} alt="" />
                        </a>

                        <a href="#" style={{ textDecoration: 'none'}}>
                            <img src={linkedIn} alt="" />
                        </a>
                    </div>


                </div>
            </div>

            <div className="headerBottom" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}}>
                <div className="headerBottomIn" style={{ display: 'flex', alignItems: 'center'}}>
                    <Link to="/" className=""><img src={logo}/></Link>
                    <ul className="headerUl flex items-center justify-right" style={{ gap: 32}}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/About"><li>About Us</li></Link>
                        <li>
                        <div className="relative group">
                            <button className="rounded-md serviceLi">Services</button>
                            <div className="absolute hidden bg-white rounded-md shadow-lg group-hover:block headerDropdownUl" style={{ width: '200px' }}>
                                <ul className="py-2 dropdownHeader">
                                <Link to="/Services1"><li className="block px-4 py-2 hover:bg-blue-100">Maritime</li></Link>
                                <Link to="/Services2"><li className="block px-4 py-2 hover:bg-blue-100">Protection</li></Link>
                                <Link to="/Services3"><li className="block px-4 py-2 hover:bg-blue-100">Claims</li></Link>
                                <Link to="/Services4"><li className="block px-4 py-2 hover:bg-blue-100">Tamper Proof</li></Link>
                                <Link to="/Portfolio"><li className="block px-4 py-2 hover:bg-blue-100">Portfolio</li></Link>
                                </ul>
                            </div>
                        </div>

                        </li>
                        <Link to="/Contact"><li>Contact</li></Link>
                        <Link to="/ProjectGallery"><li>Project Gallerry</li></Link>

                        <Button disableElevation variant="contained" color="primary" sx={{
                            width: [150, 150, 150, 203],
                            height: [40, 40, 46, 53],
                            fontSize: 14,
                            borderRadius: 0,
                            display: ['none', 'none', 'block']
                         
                        }}>
                            Free Quote
                        </Button>

                        <IconButton sx={{ color: '#074AC7', aspectRatio: 1, display: ['block', 'block', 'none']}}>
                        <i className="bi bi-list" style={{ fontSize: 30}}></i>
                        </IconButton>
                    </ul>
                </div>
            </div>
        </header>
        <div className="bg-blue-100 d-none border-t border-b border-blue-500 text-blue-700 px-4 py-3 position-fixed" id="alertDiv1" role="alert">
            <p className="font-bold">Success!</p>
            <p className="text-sm">Message Sent Succesfully!</p>
        </div>
        <div className="bg-red-100 d-none border-t border-b border-red-500 text-red-700 px-4 py-3 position-fixed" id="alertDiv2" role="alert">
            <p className="font-bold">Error!</p>
            <p className="text-sm">Fill All the fields to Continue!</p>
        </div>
        </>
    )
}