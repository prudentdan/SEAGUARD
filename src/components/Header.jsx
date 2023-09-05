
import {
    Link,
  } from "react-router-dom";
import { useState } from "react";
import '../assets/header.css';
import logo from '../assets/logo.png'
import phone from '../assets/Phone.png'
import mail from '../assets/Mail.png'
import youtube from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter-square.png'
import linkedIn from '../assets/linkedin.png'
import { Button, IconButton, Stack, SwipeableDrawer, Typography, Collapse, } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const [drawerState, setDrawerState] = useState(false)
    const [collapsibleState, setCollapsibleState] = useState(false)
    const History = useNavigate()
    return (
        <>
        <header className="header">
            <SwipeableDrawer anchor="top" open={drawerState}  onClose={() => setDrawerState(false)} onOpen={() => setDrawerState(true)} sx={{ height: '100vh'}}>
                <Stack width={'100vw'} height={'100vh'} bgcolor={'#fff'} p={[20, 30, 30]}>

                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Link to="/" className=""><img src={logo}/></Link> 
                        <IconButton onClick={() => setDrawerState(false)} sx={{p: 10, color: '#074AC7', aspectRatio: 1, display: ['flex', 'flex', 'none']}}>
                            <i className="bi bi-x-lg" style={{ fontSize: 20}}></i>
                        </IconButton> 
                    </Stack>
                    <Stack gap={16} mt={40} fontSize={[16, 18]}>
                        <Link to={'/'} style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter',}}>
                        <i className="bi bi-house" style={{ marginRight: 10}}></i> Home
                        </Link>

                        <Link to={'/about'} style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}>
                            <i className="bi bi-folder2-open" style={{ marginRight: 10}}></i> About
                        </Link>

                        <Typography sx={{ cursor: 'pointer'}} color={'#074ac7'} fontSize={'inherit'} fontFamily={'inter'} onClick={() => setCollapsibleState((prev) => !prev)}>
                        <i className="bi bi-rocket-takeoff" style={{ marginRight: 10}}></i> Services
                        </Typography>

                        <Collapse in={collapsibleState} timeout="auto" unmountOnExit>
                            <Stack gap={8} pl={12} fontSize={[14, 15]}>
                                <Link to="/Services1" style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}> <i className="bi bi-chevron-right"></i>  Maritime</Link>
                                <Link to="/Services2" style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}> <i className="bi bi-chevron-right"></i> Protection</Link>
                                <Link to="/Services3" style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}><i className="bi bi-chevron-right"></i> Claims</Link>
                                <Link to="/Services4" style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}><i className="bi bi-chevron-right"></i> Tamper Proof</Link>
                            </Stack>
                        </Collapse>

                        <Link to="/Contact" style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}> <i className="bi bi-envelope" style={{ marginRight: 10}}></i> Contact</Link>
                        <Link to="/ProjectGallery" style={{ color: '#074ac7', fontSize: 'inherit', fontFamily: 'inter'}}> <i className="bi bi-images" style={{ marginRight: 10}}></i> Project Gallerry</Link>

                        <Button disableElevation variant="contained" color="primary" sx={{
                            width: [203],
                            height: [40, 40, 46, 53],
                            fontSize: [12, 14],
                            borderRadius: 0,
                            marginTop: 50
                        }}>
                            Free Quote
                        </Button>
                    </Stack>
                </Stack>
            </SwipeableDrawer>
            <div className="headerTop">
                <div className="headerTopDivIn">
                    <div className="headerTopInfo flex items-center justify-center" style={{ gap: 32}}>
                        <span className=" flex items-center justify-left rounded-full pointer">
                            <Stack width={[24, 24,'fit-content']}>
                                <img src={phone} alt="" />
                           </Stack>
                            <Typography display={['none', 'block']} marginLeft={[14, 14, 16]} fontSize={[14, 14, 16]} className="pointer button-hover">+234-8097-4434-22</Typography>
                        </span>

                        <span className="flex items-center justify-left rounded-full pointer headerMail">
                            <Stack width={[24, 24,'fit-content']}>
                              <img src={mail} alt="" />  
                            </Stack>
                            
                            <Typography display={['none', 'block']} marginLeft={[14, 14, 16]} fontSize={[14, 14, 16]} className="pointer button-hover">info@seaguardservices.com.ng</Typography>
                        </span>
                        
                    </div>

                    <div className="HeaderIcon flex items-center justify-center" style={{ gap: 24}}>
                        <Stack width={[20, 20, 'fit-content']}>
                          <a href="#" style={{ textDecoration: 'none'}}>
                                <img src={youtube} alt="" />
                            </a>  
                        </Stack>
                        
                        <Stack width={[20, 20, 'fit-content']}>
                            <a href="#" style={{ textDecoration: 'none'}}>
                                <img src={facebook} alt="" />
                            </a>
                        </Stack>
                        
                        <Stack width={[20, 20, 'fit-content']}>
                            <a href="#" style={{ textDecoration: 'none'}}>
                                <img src={twitter} alt="" />
                            </a>
                        </Stack>
                        
                        <Stack width={[20, 20, 'fit-content']}>
                            <a href="#" style={{ textDecoration: 'none'}}>
                                <img src={linkedIn} alt="" />
                            </a>
                        </Stack>
                        
                    </div>


                </div>
            </div>

            <div className="headerBottom" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', height: 'fit-content', display: 'flex', justifyContent: 'center'}}>
                <Stack direction={'row'} width={'88%'} alignSelf={'center'} alignItems={'center'} height={[80, 100, 120]} style={{ display: 'flex', alignItems: 'center'}}>
                    <Stack width={[ 100, 100, 'fit-content']}>
                        <Link to="/" className=""><img src={logo}/></Link>
                    </Stack>
                    
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
                                </ul>
                            </div>
                        </div>

                        </li>
                        <Link to="/Contact"><li>Contact</li></Link>
                        <Link to="/ProjectGallery"><li>Project Gallerry</li></Link>

                        <Button onClick={() => History('/contact')} disableElevation variant="contained" color="primary" sx={{
                            width: [150, 150, 150, 203],
                            height: [40, 40, 46, 53],
                            fontSize: 14,
                            borderRadius: 0,
                            display: ['none', 'none', 'block']
                         
                        }}>
                            Contact Us
                        </Button>

                        <IconButton onClick={() => setDrawerState(true)} sx={{ color: '#074AC7', aspectRatio: 1, display: ['flex', 'flex', 'none']}}>
                        <i className="bi bi-list" style={{ fontSize: 30}}></i>
                        </IconButton>
                    </ul>
                </Stack>
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