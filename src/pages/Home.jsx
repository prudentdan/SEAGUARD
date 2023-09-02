import { useEffect } from 'react'
import Header from '../components/Header';
import Services from '../components/Services';
import Brand from '../components/Brand';
import Feedback from '../components/Feedback';
import Footer from '../components/Footer';
import { Link, } from "react-router-dom";
import  '../index.css';
import  '../assets/main.css';
import 'typeface-dm-sans'
import backcover from '../assets/backcover.jpeg'
import { Button, Typography } from '@mui/material';
import frame1 from '../assets/frame1.png'
import {Stack} from '@mui/material';
import pic1 from '../assets/pic1.png'


export default function Home(){
    
    useEffect(() => {
        
    // function typeWriter(){
    //     var i=0;
    //     var ii=0;
    //     var iii=0;
    //     var txt1 = 'Welcome to';
    //     var txt2 = 'Seaguard International';
    //     var txt3 = 'Services';
    //     var speed = 90;
                    
    //     if (i <= 40) 
    //     {
    //         if(i <= txt1.length){
    //         document.getElementById("demo1").innerHTML += txt1.charAt(i); 
    //         i++;
    //         }
    //         else if(i <= txt2.length){
    //             document.getElementById("demo2").innerHTML += txt2.charAt(ii); 
    //             // i++;
    //             ii++;
    //         }
    //         else{
    //             document.getElementById("demo3").innerHTML += txt3.charAt(iii); 
    //             // i++;
    //             // ii++;
    //             iii++;
    //         };
    //         setTimeout(typeWriter, speed);	
    //     };
    
    // };
    //     window.onload =typeWriter();
    }, []);
  
    return (
        <div style={{ overflowX: 'hidden'}}>
            <Header />

            <div> 
                <section>
                    <div className="landingPageContent">
                        <img className="landingImg" src={ backcover }/>
                        <div className="OverLangingpage">
                            <div className="OverlandingContent" style={{ gap: 0}}>
                                <Typography lineHeight={'120%'} maxWidth={'837px'} variant='caption' fontSize={['38px', '48px', '64px']} style={{ fontWeight: 700, fontFamily: 'DM Sans'}}>Welcome to <br /> Seaguard International <br /> Services</Typography>
                                {/* <h1 id="demo1"></h1>
                                <h1 id="demo2"></h1>
                                <h1 id="demo3"></h1> */}
                                <Typography fontFamily={'DM Sans'} fontWeight={500} variant='h2' fontSize={[16]} lineHeight={'normal'} maxWidth={'555px'} style={{ marginTop: 4,}}>We provide Professional Maritime and Cargo Superintending, Surveying and Support Services in Nigeria and the West Africa Coast</Typography>
                                <Link to="/About" style={{ height: 'fit-content', marginTop: 58}}>
                                <Button disableElevation variant='contained' color='primary' sx={{ fontSize: 14, fontWeight: 500, borderRadius: 0, width: 203, height: 53}}> 
                                    explore more
                                </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="aboutDiv flex items-center justify-center">
                        <Stack columnGap={['100px', '50px', '100px']} rowGap={'40px'} pt={[59, null, null]} direction={['column', 'row']} maxWidth={'1200px'} px={['30px', '100px', '100px']}>
                            <Stack flex={1} position={'relative'}>
                                <Stack alignSelf={'center'} width={['80%', '100%']} alignItems={'center'} justifyContent={'center'} position={'relative'} className="">
                                    <img width={'100%'} src={frame1}/>
                                    <img className="" style={{ position: 'absolute', right: 35, bottom: 35}} src={pic1}/>
                                </Stack>
                            </Stack>
                            <Stack flex={1}>
                                <div className="aboutTitleDivPar">
                                    <Typography lineHeight={'normal'} color={'#02173E'} fontSize={[38, 48, 48]} style={{ fontWeight: 700}}>About Us</Typography>
                                    <Stack mt={['10px','16px']} width={'118px'} bgcolor={'#074AC7'} height={'4px'}></Stack>
                                </div>

                                <Typography fontSize={[16, 18]} marginTop={[28, 32]} style={{ fontWeight: 500, maxWidth: 450, lineHeight: 'normal', color: '#000'}}>We are professional cargo superintending, cargo inspecting and cargo surveying company registered in Nigeria and with foreign links.</Typography>
                                <Link to={'/About'} style={{ marginTop: '64px', textDecoration: 'none'}}>
                                    <Button variant='contained' disableElevation color='primary' sx={{ width: '203px', height: '53px', borderRadius: 0,  fontSize: 14, fontWeight: 500}}>
                                        Learn more
                                    </Button>
                                </Link>
                                
                            </Stack>
                        </Stack>
                    </div>
                </section> 

                <Services />
                
                <Brand />
                
                <Feedback />
      
                <section>
                    <div className="bookCall">
                        <div className="bookACalOverDiv">
                            <div className="bookACalOverDivIn">
                                <p className="bookCallPTag">We are Independent, Trustworthy,<br /> Experienced, Efficient & Technically sound.</p>
                            
                                <Link to="/Contact"><button style={{ marginTop: 32}}className="exploreBtn">BOOK A CALL</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer /> 
        </div>
    )
}
