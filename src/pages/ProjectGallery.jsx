import Header from '../components/Header';
import Footer from '../components/Footer';
import { Stack, Typography } from '@mui/material';
import Projects from '../assets/project-portfolio.png'
import  '../index.css';
import  '../assets/main.css';
import portfolio1 from '../assets/portfolio1.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import portfolio3 from '../assets/portfolio3.jpg'
import portfolio4 from '../assets/portfolio4.jpg'
import portfolio5 from '../assets/portfolio5.jpg'
import portfolio6 from '../assets/portfolio6.jpg'
import portfolio7 from '../assets/portfolio7.jpeg'
import portfolio8 from '../assets/portfolio8.jpg'
import portfolio9 from '../assets/portfolio9.jpg'

const portfolios = [
    {
        img: portfolio1,
        key: 1
    },
    {
        img: portfolio2,
        key: 2
    },
    {
        img: portfolio3,
        key: 3
    },
    {
        img: portfolio4,
        key: 4
    },
    {
        img: portfolio5,
        key: 5
    },
    {
        img: portfolio6,
        key: 6
    },
    {
        img: portfolio7,
        key: 7
    },
    {
        img: portfolio8,
        key: 8
    },
    {
        img: portfolio9,
        key: 9
    }
]
export default function ProjectGallery(){
    return (
        <>
            <Header />
            <Stack minHeight={[ 250, 304, 384]} className="aboutTitleDiv" sx={{ background: `url(${Projects})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className=" aboutTitleImgOver">
                    <Stack direction={'row'} pt={[130, 164, 184 ]} alignItems={'center'} minHeight={['100%']} className="aboutTitleImgOverIn flex">
                        <h2 className="aboutTitle" style={{fontFamily: 'inter'}}>Contact</h2>
                    </Stack>
                </div>
            </Stack>
            <div className="portfolioDiv">
                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 117]} mb={[27, 47, 57]}>
                        Bulk Cargo
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Claims
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Coils Project
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Inspections
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Oil, Bunkering, Ship-to-ship (S2S)
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Project Cargo
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Rice Imports & Exports
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>

                <div className="portfolioDivIn">
                    <Typography fontFamily={'inter'} fontSize={[26, 32]} color={'#031a6b'} fontWeight={600} mt={[57, 87, 97]} mb={[27, 47, 57]}>
                        Salvage
                    </Typography>
                    <Stack direction={'row'} position={'relative'}>

                    <Stack height={'100%'} sx={{ background:'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>  

                    <Stack height={'100%'} right={0} sx={{ background:'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))'}} position={'absolute'} width={[50, 100]} zIndex={30}>
                    </Stack>
                      
                    <Stack gap={30} direction={'row'} sx={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',
                        position: 'relative'
                    }}>
                        {
                            portfolios.map(e => <Stack key={e.key} width={'32%'} minWidth={300} sx={{ aspectRatio: '1/0.8'}}>
                            <img src={e.img} width={'100%'} height={'100% !important'} style={{ maxHeight: '100%', minHeight: '100%'}} alt="" />
                        </Stack>)
                        }
                    </Stack>

                    </Stack>
                </div>
            </div>
            <Footer />
        </>
    )
}