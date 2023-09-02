import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'
import brand5 from '../assets/brand5.png'
import brand6 from '../assets/brand6.png'
import brand7 from '../assets/brand7.png'


export default function PorftolioComponent() {

  return (
    <section>
      <div className="serviceDiv">
        <div className="serviceDivIn">
            {/* <h4 className="serviceTitle">OUR SERVICES</h4>
            <h2 className="serviceExplain">Explore Our Services</h2> */}
            <div className="serviceDivContentPar flex items-center gap-2 mt-9">

            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={-300}
              loop={true}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              <SwiperSlide>
                <div className="serviceDivContent">
                    <img className="serviceDivContentImg portfolioCompany" src={brand1}/>
                    <div className="imgServiceOver">
                        <p className="flex items-center">Mobil Petroleum</p>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand2}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">Nigeria Shipping Services</p>
                  </div>
                </div>  
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand3}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">Nigeria Brewries Plc.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                    <img className="serviceDivContentImg portfolioCompany" src={brand4}/>
                    <div className="imgServiceOver">
                        <p className="flex items-center">7up  Botling Company plc.</p>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand5}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">AXA Company</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand6}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">Dangote Group Of Company</p>
                  </div>
                </div>  
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand7}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">Heineken Plc.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                    <img className="serviceDivContentImg portfolioCompany" src={brand1}/>
                    <div className="imgServiceOver">
                        <p className="flex items-center">Mobil Petroleum</p>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand2}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">Nigeria Shipping Services</p>
                  </div>
                </div>  
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                  <img className="serviceDivContentImg portfolioCompany" src={brand3}/>
                  <div className="imgServiceOver">
                    <p className="flex items-center">Nigeria Brewries Plc.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="serviceDivContent">
                    <img className="serviceDivContentImg portfolioCompany" src={brand4}/>
                    <div className="imgServiceOver">
                        <p className="flex items-center">7up  Botling Company plc.</p>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
                
          </div>
        </div>
      </div>
    </section>
  );
}

