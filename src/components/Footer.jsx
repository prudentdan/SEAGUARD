
import { Link, } from "react-router-dom";
import '../index.css';
import '../assets/footer.css';
import Location from '../assets/Location pin.png'
import Mail from '../assets/Mail_footer.png'
import Phone from '../assets/Phone_footer.png'
import { Stack, Typography, styled, TextField, IconButton } from "@mui/material";
import Youtube from '../assets/youtube_footer.png'
import Facebook from '../assets/facebook_footer.png'
import Twitter from '../assets/twitter-square_footer.png'
import LinkedIn from '../assets/linkedin_footer.png'
import KeyboardIconRight from '../assets/Keyboard arrow right.png'

export const Form = styled(TextField)({
    background: '#AFEBF9',
    color: '#02173E',
    border: 0,
    width: '250px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px !important',
    '& .MuiOutlinedInput-root': {
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        height: 38,
        padding: '0px !important',
        "& fieldset": {
            border: 0,
            alignItems: 'center',
            padding: '0px !important'
        },
    }
})

import footerLogo from '../assets/footerLogo.png'

export default function Footer(){
    // function footerSubmit(e) {
        
    //     const contactFormEmail = document.getElementById("footerEmail");
    //     const contactFormSuccessAlert = document.getElementById("alertDiv1");
    //     const contactFormErrorAlert = document.getElementById("alertDiv2");

    //     const formElef = document.querySelector("#form");
    //     const formDatabf = new FormData(formElef);
    //     e.preventDefault()
    //     console.log("submitted");
    //     // console.log(formDatabf);
    //     // console.log(formElef);
    //     let contactFormEmailVal = contactFormEmail.value;
    //     // console.log(contactFormNameVal);
    
    //     if(contactFormEmailVal!=''){
    
    //         fetch(
    //         "https://script.google.com/macros/s/AKfycbwDhG2gby4qKiechtJK_K6sFvRJKjXbxPk8Gss1hokwBSYWbatm4aEKsCNwxRfldGht/exec",
    //         {
    //             method: "POST",
    //             body: formDatabf
    //         }
    //         )
    //         //   .then((res) => res.json())
    //         .then((data) => {
    //         // console.log(data);
            
    //         // Fade In
    //         contactFormSuccessAlert.style.opacity = '1';

    //         // Delay
    //         setTimeout(() => {
    //             // Fade Out
    //             contactFormSuccessAlert.style.opacity = '0';
    //         }, 5000);

    //         })
    //         .catch((error) => {
    //         console.log('Error submitting form: ',error);
    //         });
    //     }
    //     else{
    //         // Fade In
    //         contactFormErrorAlert.style.opacity = '1';
        
    //         // Delay
    //         setTimeout(() => {
    //             // Fade Out
    //             contactFormErrorAlert.style.opacity = '0';
    //         }, 5000);
        
    //     }
    //   }
      

    return (
        <Stack minHeight={384} bgcolor={'#02173E'} px={['20px', '100px', '100px']} py={'73px'}>
            <Stack direction={'row'} flexWrap={'wrap'} alignItems={'flex-start'} justifyContent={'space-between'} width={'100%'} alignSelf={'center'} flex={1} rowGap={['30px', '60px', '']} maxWidth={'1200px !important'}>
                <Stack gap={'36px'} width={['100%', '48%', '234px']}>
                    <img src={footerLogo} alt="" style={{ background: '#fff', width: 'fit-content'}} />
                    <Stack width={'100%'} maxWidth={['100%', '234px', '100%']} gap={'8px'}>
                        <Typography fontSize={14} color={'#fff'} >
                            For over 25years...
                        </Typography>

                        <Typography fontSize={14} color={'#fff'} >
                            Seaguard International Services
                        </Typography>

                        <Typography fontSize={14} color={'#fff'} >
                            has been offering Professional Maritime and Cargo Superintending, Surveying and Support Services in Nigeria and the West Africa Coast
                        </Typography>
                    </Stack>
                </Stack>

                <Stack gap={'14px'} width={['100%', '48%', 'fit-content']} pl={[0, '8vw', 0]}>
                    <Typography fontSize={18} fontWeight={500} color={'#fff'}>
                        Navigation
                    </Typography>
                    <Stack maxWidth={'234px'} gap={'8px'} color={'#fff'}>
                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            About Us
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            Services
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            Jobs
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            Portfolio
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            Contact
                        </Link>
                    </Stack>
                </Stack>

                <Stack gap={'14px'} width={['100%', '48%', 'fit-content']}>
                    <Typography fontSize={18} fontWeight={500} color={'#fff'}>
                       Get in touch
                    </Typography>
                    <Stack maxWidth={'234px'} gap={'26px'} color={'#fff'}>
                        <Stack maxWidth={'250px'} direction={'row'} gap={'16px'} alignItems={'center'}>
                            <img src={Location} alt="" />
                            <Typography fontSize={14} fontWeight={500} lineHeight={'normal'}>
                            61, Payne Crescent, Apapa, Lagos State, Nigeria.
                            </Typography>
                        </Stack>

                        <Stack maxWidth={'250px'} direction={'row'} gap={'16px'} alignItems={'center'}>
                            <img src={Phone} alt="" />
                            <Typography fontSize={14} fontWeight={500} lineHeight={'120%'}>
                                +234.(0)802 328 9389
                                <br />
                                +234.(0)708 320 3884
                            </Typography>
                        </Stack>

                        <Stack maxWidth={'250px'} direction={'row'} gap={'16px'} alignItems={'flex-start'}>
                            <img src={Mail} alt="" />
                            <Typography fontSize={14} fontWeight={500} lineHeight={'130%'}>
                            info@seaguardservices.com.ng
                            <br />
                            seaguardsurveyors@yahoo.com  
                            <br />
                            seaguardsurveyors@hotmail.com

                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack gap={'14px'} width={['100%', '48%', 'fit-content']} pl={[0, '8vw', 0]}>
                    <Typography fontSize={18} fontWeight={500} color={'#fff'}>
                        Social Network
                    </Typography>
                    <Stack alignItems={'center'} direction={'row'} maxWidth={'234px'} gap={'24px'} color={'#fff'}>
                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            <img src={Youtube} alt="" />
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            <img src={Facebook} alt="" />
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            <img src={Twitter} alt="" />
                        </Link>

                        <Link style={{ fontSize: 14, fontWeight: 500, textDecoration: 'none'}} to={''}>
                            <img src={LinkedIn} alt="" />
                        </Link>
                    </Stack>

                    <Typography mt={'54px'} fontSize={18} fontWeight={500} color={'#fff'} mb={'0px'}>
                        Sign up for email alerts
                    </Typography>

                    <Form fullWidth InputProps={{
                        endAdornment: (<IconButton sx={{ width: '38px', height: '38px', background: '#074AC7', '&:hover': {background: '#074AC7'}, color: '#fff', borderRadius: 0}}> <img src={KeyboardIconRight} alt="" /> </IconButton>)
                    }} placeholder={'Enter your email'} />
                </Stack>
            </Stack>
        </Stack>
    )
}