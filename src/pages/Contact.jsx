import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import  '../index.css';
import  '../assets/main.css';
import { Stack, Typography, TextField, styled, Button, Alert, AlertTitle } from '@mui/material';
import Mail from '../assets/Mail_light.png'
import Location from '../assets/Location pin_;ight.png'
import Phone from '../assets/Phone_light.png'
import ContactBg from '../assets/contact.png'

export const Form = styled(TextField)({
    background: '#fff',
    color: '#02173E',
    border: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-root': {
        fontSize: [14, 16],
        display: 'flex',
        alignItems: 'center',
        height: [44, 64],
        "& fieldset": {
            border: 0,
            alignItems: 'center',
            padding: '0px !important'
        },
    }
})

export default function Contact(){
    const mapStyle = {
        width: '100%',
        height: '100%',
        frameborder:"0", 
        border:'0',
        allowfullscreen:''
      };

      const [formState, manageFormState] = useState({
        name: '',
        email: '',
        message: '',
        formSubmission: false
      })

      useEffect( () => {
        setTimeout( () => manageFormState({
            ...formState,
            formSubmission: false
        }), 3000)
      }, [formState.formSubmission])

    return (
        <>
            <Header />
            { formState.formSubmission ? <Alert severity="success" sx={{ position: 'fixed', top: 24, right: 24, zIndex: 200, boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)', width: 320}}>
                <AlertTitle> <strong>Success!</strong></AlertTitle>
                Your email was sent successfully
            </Alert> : null}
            <Stack minHeight={[ 250, 304, 384]} className="aboutTitleDiv" sx={{ background: `url(${ContactBg})`}}>
                <div className=" aboutTitleImgOver">
                    <Stack direction={'row'} pt={[130, 164, 184 ]} alignItems={'center'} minHeight={['100%']} className="aboutTitleImgOverIn flex">
                        <h2 className="aboutTitle" style={{fontFamily: 'inter'}}>Contact</h2>
                    </Stack>
                </div>
            </Stack>
            
            <Stack pt={[80, 100, 151]} pb={[80, 90, 104]} bgcolor={'#fff'}>
                <Stack direction={['column','row']} alignSelf={'center'} width={'88%'} rowGap={40} maxWidth={1200} justifyContent={'space-between'}>
                    <Stack flex={.4}>
                        <Typography fontFamily={'inter'} fontSize={12} fontWeight={600} color={'#02173e'}>
                            CONTACT DETAILS
                        </Typography>

                        <Typography lineHeight={'normal'} fontFamily={'inter'} fontSize={[32, 32, 40]} fontWeight={600} color={'#02173e'}>
                            NEED HELP?
                        </Typography>

                        <Typography lineHeight={'150%'} fontFamily={'inter'} fontSize={[16]} fontWeight={400} mt={[10, 24]} maxWidth={402} color={'#02173e'}>
                            We are committed to providing excellent customer service. Please do not hesitate to contact us with any questions or concerns.
                        </Typography>

                        <Stack mt={[30, 45]} gap={30}>
                            <Stack direction={'row'} gap={16} alignItems={'center'}>
                                <img src={Location} alt="" />
                                <Typography fontFamily={'inter'} fontSize={14} fontWeight={500} color={'#02173e'}>
                                    61, Payne Crescent, Apapa, Lagos State, Nigeria
                                </Typography>
                            </Stack>

                            <Stack direction={'row'} gap={16} alignItems={'center'}>
                                <img src={Mail} alt="" />
                                <Typography fontFamily={'inter'} fontSize={14} fontWeight={500} color={'#02173e'}>
                                    info@seaguardservices.com.ng
                                </Typography>
                            </Stack>

                            <Stack direction={'row'} gap={16} alignItems={'center'}>
                                <img src={Phone} alt="" />
                                <Typography fontFamily={'inter'} fontSize={14} fontWeight={500} color={'#02173e'}>
                                    +234.(0)802 328 9389
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack flex={.5} alignItems={'center'} justifyContent={'center'}>
                        <Stack width={'100%'} gap={[20, 32]} maxWidth={555} p={[20, 32]} bgcolor={'#C0D6FF66'}>
                            <Form required value={formState.name} onChange={(e) => manageFormState((prev) => ({
                                ...prev,
                                name: e.target.value
                            }))} placeholder='Your Name' fullWidth />

                            <Form type='email' required value={formState.email} onChange={(e) => manageFormState((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))} placeholder='Your Email' fullWidth />

                            <Form required value={formState.message} onChange={(e) => manageFormState((prev) => ({
                                ...prev,
                                message: e.target.value
                            }))} sx={{'& .MuiOutlinedInput-root': {
                                height: 'fit-content',
                                minHeight: 100,
                                alignItems: 'flex-start'
                            }}} placeholder='Message...' fullWidth multiline />

                            <Button disabled={ formState.email && formState.message && formState.name ? false : true } disableElevation variant='contained' onClick={() => {console.log(formState); manageFormState({ name: '', email: '', message: '', formSubmission: true})}} sx={{ 
                                '&.MuiButton-contained': {
                                    bgcolor: '#02173E',
                                    borderRadius: 0,
                                    height: 53,
                                    fontSize: [12, 14],
                                    fontWeight: 500,
                                    '&:disabled': {
                                        bgcolor: 'rgba(2, 23, 62, 0.6)',
                                        color: '#fff'
                                    }
                                }
                            }}>
                                SEND MESSAGE
                            </Button>
                        </Stack>
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