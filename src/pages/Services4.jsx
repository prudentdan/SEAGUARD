import Header from '../components/Header';
import Footer from '../components/Footer';
import  '../index.css';
import  '../assets/main.css';
import BgImage from '../assets/servicesbg.png'
import { Stack, Typography } from '@mui/material';
import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import portfolio3 from '../assets/portfolio3.jpg'

export default function Services4(){
    return (
        <Stack>
            <Header />

            <Stack minHeight={[ 250, 304, 384]} style={{ background: `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <Stack direction={'row'} pt={[130, 164, 184 ]} alignItems={'center'} minHeight={['100%']} className="aboutTitleImgOverIn flex">
                        <h2 className="aboutTitle" style={{fontFamily: 'inter'}}>Our Service</h2>
                    </Stack>
                </div>
            </Stack>

            <Stack bgcolor={'#fff'} width={'100%'} py={128} alignItems={'center'}>
                <Stack gap={[20, 26, 38]} maxWidth={1200} width={'88%'}>
                    <Typography lineHeight={'120%'} fontSize={[28, 36, 48]} fontWeight={700} color={'#000'}>
                        Tamper Proof Devices
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                       <span style={{ fontWeight: 700}}>(i) Draft Survey Services:</span>  Draft survey refer to displacement survey are meant to determine, and quantify the tonnage / quantities of any bulk cargo in the vessel’s hold by mathematical calculations using the ship statistical tables. The draft survey are conducted before and after loading and before and after discharge is completed. 
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        Relevant: For bulk cargoes such as rice, fertilizer, sugar, wheat, cement, iron ores, gysum, etc.
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                       <span style={{ fontWeight: 700}}>(ii) Bunker/Ullage Survey Services:</span>  The bunker survey and ullage involves the determination of the quantities of any liquid cargo in the tanks by mathematical calculations using the ship’s data table. The operations are usually conducted before and after loading, and before and after discharge. Relevant: For bulk, wet and liquid cargoes such as oil, chemicals and petroleum products

                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                       <span style={{ fontWeight: 700}}>(iii) Cargo Inspection Services:</span>  The superintendence of a cargo consignment involves the attendance on board the ship, the supervision of the discharge, loading, tally of deliveries, remarks of discrepancies, etc.This service is relevant for bulk and break bulk, large and cased consignment, loading and unloading e.t.c. 
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        Relevant: Project imports, Iron Rods, Rice, Sugar etc.
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                       <span style={{ fontWeight: 700}}>(iv) Cargo Condition Survey Services:</span>  The cargo condition survey services involve the physical examinations of consignment, and stating the statement of fact on the cargo general condition, the remarks and documentation of the cargo during and before change of vendors. Usually when a cargo is subject to many transport and cargo-handling vendors.

                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        Suitable For terminal operators, transporters, importers, banks/financial e.t.c
                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                       <span style={{ fontWeight: 700}}>(v) Cargo Damage/Loss Surveys Services:</span> The survey report services are necessary for damaged and discrepant cargoes. The detailed surveys are conducted to establish the proximate cause, the nature, the quantity damaged, salvage, and recovery and cargo loss adjustment. The damage cargo surveys are conducted for any damage, discrepant and lost cargo

                    </Typography>

                    <Typography fontSize={[18, 20]} lineHeight={'160%'} color={'#000'}>
                        Relevancy: Any damage cargo and marine claim management.
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