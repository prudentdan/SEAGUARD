import Header from '../components/Header';
import Footer from '../components/Footer';
import  '../index.css';
import  '../assets/main.css';

import vision from '../assets/vision.jpg'
import mission from '../assets/mission.jpg'
import value from '../assets/value.avif'
import { Stack, Typography } from '@mui/material';

export default function About(){
    return (
        <div style={{ overflowX: 'hidden'}}>
            <Header />
            <Stack minHeight={[ 250, 304, 384]} className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <Stack direction={'row'} pt={[130, 164, 184 ]} alignItems={'center'} minHeight={['100%']} className="aboutTitleImgOverIn flex">
                        <h2 className="aboutTitle" style={{fontFamily: 'inter'}}>About Us</h2>
                    </Stack>
                </div>
            </Stack>
            <Stack py={[60, 80 ,131]} alignItems={'center'} className="aboutContentDiv">
                <div className="aboutContentDivIn" style={{ maxWidth: 1200}}>
                    <Typography fontSize={[28, 38, 48]} fontWeight={700} color={'#000'}>Who we are</Typography>
                    <Typography mt={[18, 20, 32]} fontSize={[18, 20, 20]} lineHeight={'133.33%'}>We are professional cargo superintending, cargo inspecting and cargo surveying company registered in Nigeria and with foreign links. </Typography>

                    <Typography fontSize={[18, 20, 20]} lineHeight={'133.33%'} mt={25}>By virtue of our operations and services, we represent terminal operators, importers, underwriters and P & I clubs. Our staffs are dedicated, trained and experienced marine surveyors, cargo superintendents and marine claims managers. Our services are specially designed to serve those who valued and take management of their marine risk and marine claims management serious. Our technical services which will take care of all your shipping, port operations, insurance and marine logistics are listed below:</Typography>

                    <Stack mt={[32]} rowGap={30} direction={['', 'row']}>
                        <Stack flex={1}>
                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Draft Survey Services
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Bunker/Ullage Survey Services
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Cargo Inspection Service
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Cargo Condition Survey
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Damaged Cargo/ Loss Survey
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Tallies
                            </Typography>
                        </Stack>

                        <Stack flex={1}>
                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Cargo Monitor/Tracking
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Port Liaison Services 
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                P & I Claims Services
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Cargo Claims Management
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Salvage Disposal Management
                            </Typography>

                            <Typography fontSize={[18, 20, 20]} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Sales of Tamper Proof Devices such as Seals
                            </Typography>
                        </Stack>
                    </Stack>
                </div>
            </Stack>
            <div style={{ display: 'flex', background: '#fff', justifyContent: 'center', paddingBottom: 50, width: '100'}} >
                <Stack direction={['', 'row']} height={['fit-content', 'fit-content',469]} width={'88%'} maxWidth={1200} justifySelf={'center'}>
                    <Stack minHeight={320} textAlign={'center'} width={['100%', '50%']} justifyContent={'center'}  alignItems={'center'} bgcolor={'#c0d6ff'}>
                        <Stack maxWidth={474} p={20}>
                            <Typography marginBottom={[32]} fontSize={[32]} color={'#02173e'} fontWeight={700}>
                                Our Mission
                            </Typography>
                            <Typography fontSize={16} color={'#02173e'} lineHeight={'150%'}>To provide an excellent Risk Management Services as to position Maritime Risk to remain the first choice in Cargo Surveys & Superintending by using modern information technology and skilled work force.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width={['100%', '50%']}>
                        <img width={'100%'} height={'100% !important'} src={mission} style={{ maxHeight: '100%', height: '100%'}}/>
                    </Stack>
                </Stack>
            </div>

            <div style={{ display: 'flex', background: '#fff', justifyContent: 'center', paddingBottom: 50, width: '100'}} >
                <Stack direction={['column-reverse', 'row-reverse']} height={['fit-content', 'fit-content',469]} width={'88%'} maxWidth={1200} justifySelf={'center'}>
                    <Stack minHeight={320} textAlign={'center'} width={['100%', '50%']} justifyContent={'center'}  alignItems={'center'} bgcolor={'#c0d6ff'}>
                        <Stack maxWidth={474} p={20}>
                            <Typography marginBottom={[32]} fontSize={[32]} color={'#02173e'} fontWeight={700}>
                                Our Vision
                            </Typography>
                            <Typography fontSize={16} color={'#02173e'} lineHeight={'150%'}>To provide an excellent Risk Management Services as to position Maritime Risk to remain the first choice in Cargo Surveys & Superintending by using modern information technology and skilled work force.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width={['100%', '50%']}>
                        <img width={'100%'} height={'100% !important'} src={vision} style={{ maxHeight: '100%', height: '100%'}}/>
                    </Stack>
                </Stack>
            </div>

            <div style={{ display: 'flex', background: '#fff', justifyContent: 'center', paddingBottom: 128, width: '100'}} >
                <Stack direction={['', 'row']} height={['fit-content', 'fit-content',469]} width={'88%'} maxWidth={1200} justifySelf={'center'}>
                    <Stack minHeight={320} textAlign={'center'} width={['100%', '50%']} justifyContent={'center'}  alignItems={'center'} bgcolor={'#c0d6ff'}>
                        <Stack maxWidth={474} p={20}>
                            <Typography marginBottom={[32]} fontSize={[32]} color={'#02173e'} fontWeight={700}>
                                Our Value
                            </Typography>
                            <Typography fontSize={16} color={'#02173e'} lineHeight={'150%'}>To provide an excellent Risk Management Services as to position Maritime Risk to remain the first choice in Cargo Surveys & Superintending by using modern information technology and skilled work force.</Typography>
                        </Stack>
                    </Stack>
                    <Stack width={['100%', '50%']}>
                        <img width={'100%'} height={'100% !important'} src={value} style={{ maxHeight: '100%', height: '100%'}}/>
                    </Stack>
                </Stack>
            </div>
            <Footer />
        </div>
    )
}