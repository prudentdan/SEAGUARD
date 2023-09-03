import Header from '../components/Header';
import Footer from '../components/Footer';
import  '../index.css';
import  '../assets/main.css';
import { Stack, Typography } from '@mui/material';
export default function Contact(){
    const mapStyle = {
        width: '100%',
        height: '100%',
        frameborder:"0", 
        border:'0',
        allowfullscreen:''
      };

    return (
        <>
        <Header />
            <Stack minHeight={[ 250, 304, 384]} className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <Stack direction={'row'} pt={[130, 164, 184 ]} alignItems={'center'} minHeight={['100%']} className="aboutTitleImgOverIn flex">
                        <h2 className="aboutTitle" style={{fontFamily: 'inter'}}>Contact</h2>
                    </Stack>
                </div>
            </Stack>
            <Stack pt={151} pb={104} bgcolor={'#fff'}>
                <Stack direction={['row']} alignSelf={'center'} width={'88%'} maxWidth={1200}>
                    <Stack>
                        <Typography>

                        </Typography>
                    </Stack>
                    <Stack>

                    </Stack>
                </Stack>
            </Stack>
            <div className="googleMapDiv">
                <div className="googleMapDivIn w-100" >
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" style={mapStyle}></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}