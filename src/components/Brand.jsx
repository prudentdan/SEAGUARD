import { useEffect } from 'react'
import { Typography } from '@mui/material'
import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'
import brand7 from '../assets/brand7.png'

export default function Brand(){

    useEffect(() => {
        var copy = document.querySelector(".logos-slide").cloneNode(true);
        document.querySelector(".logos").appendChild(copy);
    }, []);
  
    return (
        <>
            <section >
                <div className="brandsLogo" style={{ minHeight: 400, display: 'flex', alignItems: 'center'}}>
                    <div className="brandsLogoIn">
                        <Typography fontSize={[24, 32]} fontWeight={500} textAlign={'center'} lineHeight={'normal'} mt={64}>Here are a few Global brands, we have worked for over the years . . .</Typography>
                        <div className="imgDiv flex justify-center">

                            <div className="logos flex justify-between items-center">
                                <div className="logos-slide flex justify-between items-center">
                                    <img src={brand1} />
                                    <img src={brand2} />
                                    <img src={brand3} />
                                    <img src={brand4} />
                                    <img src={brand5} />
                                    <img src={brand6} />
                                    <img src={brand7} />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
    
}
