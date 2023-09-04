import Header from '../components/Header';
import Footer from '../components/Footer';
import  '../index.css';
import  '../assets/main.css';
import BgImage from '../assets/servicesbg.png'
import { Stack, Typography } from '@mui/material';
import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import portfolio3 from '../assets/portfolio3.jpg'

export default function Services2(){
    return (
        <Stack>
            <Header />

            <Stack minHeight={[ 250, 304, 384]} style={{ background: `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <Stack direction={'row'} pt={[130, 164, 184 ]} alignItems={'center'} minHeight={['100%']} className="aboutTitleImgOverIn flex">
                        <h2 className="aboutTitle" style={{fontFamily: 'inter'}}>Our Services</h2>
                    </Stack>
                </div>
            </Stack>

            <Stack bgcolor={'#fff'} width={'100%'} py={[70, 90, 128]} alignItems={'center'}>
                <Stack gap={[20, 26, 38]} maxWidth={1200} width={'88%'}>
                    <Typography lineHeight={'120%'} fontSize={[26, 32, 48]} fontWeight={700} color={'#000'}>
                        Protection and Indemnity (P&I) Insurance
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        This insurance, usually referred to as “P&I,” provides cover to shipowners, operators, and charterers for third-party liabilities encountered in the commercial operation of entered vessels. The main risks covered are liabilities, expenses, and costs for:
                    </Typography>

                    <Stack flex={1} marginTop={[-20, -26, -38]}>
                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Loss of life, injury and illness of crew, passengers and other persons
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Cargo loss, shortage or damage
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Collision
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Damage to docks, buoys and other fixed and floating objects
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Wreck removal
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Pollution
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Fines and penalties
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Mutiny and misconduct by crew
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Crew repatriation
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Damage to property on board the insured vessel
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Quarantine
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Vessel Diversion Expenses
                            </Typography>

                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                Unrecoverable General Average contributions
                            </Typography>
                            
                            <Typography fontSize={[18, 20]} color={'#000'} display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
                                <span style={{ fontSize: 14}}>
                                    ●
                                </span>
                                {`Vessel's proportion of Geneal Average`}
                            </Typography>
                        </Stack>

                        

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        This cover is referred to as “Class I,” and the Class I Rules are the basic contractual terms upon which the owners/operators, or “members,” are insured. For full details of the cover, Kindly contact Us
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        P&I cover is designed to complement a vessel’s hull and machinery insurance and related covers. It is distinguished from ordinary marine insurance in that it is based on the not-for-profit principle of mutuality where members of the club are both the insurers and the insureds. As a consequence, the scope of cover offered by P&I insurance is unsurpassed in its reach and cost-effectiveness.

                    </Typography>
                </Stack>

                <Stack rowGap={'2.33%'} mt={63} width={'88%'} flexWrap={'wrap'} maxWidth={1200} alignSelf={'center'} justifyContent={'space-around'} direction={'row'}>
                    <Stack width={['100%' ,'48%','31%']} sx={{ aspectRatio: '1/0.8'}}>
                        <img src={portfolio1} width={'100%'} height={'100%'} alt="" style={{ maxHeight: '100%', minHeight: '100%'}} />
                    </Stack>

                    <Stack width={['100%' ,'48%','31%']} sx={{ aspectRatio: '1/0.8'}}>
                        <img src={portfolio2} width={'100%'} height={'100%'} alt="" style={{ maxHeight: '100%', minHeight: '100%'}} />
                    </Stack>

                    <Stack width={['100%' ,'48%','31%']} sx={{ aspectRatio: '1/0.8'}}>
                        <img src={portfolio3} width={'100%'} height={'100%'} alt="" style={{ maxHeight: '100%', minHeight: '100%'}} />
                    </Stack>
                </Stack>
            </Stack>
           
            <Footer />
        </Stack>
    )
}