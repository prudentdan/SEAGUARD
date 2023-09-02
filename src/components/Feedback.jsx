
import Carousel from 'react-bootstrap/Carousel';
import feedbackMark from '../assets/feedbackMark.png'
import { Button } from '@mui/material';


export default function Feedback() {
    return (
      <section>
        <div className="feedbackDiv flex items-center">
          <div className="feedbackDvIn flex justify-between gap-6" style={{ rowGap: '36px !important'}}>
            <div className="feedbackDvInCon">
                <h2 className="serviceExplain feedbackTitle">What People Say <br /> About Our Company</h2>
                <p style={{ padding: '24px 0', fontSize: 16, color: '#02173E'}}>Our reputation speaks volumes through <br /> the voices of those we've served. </p>   

                <Button variant='contained' color='primary' disableElevation sx={{ width: 203, height: [46, 53], fontSize: 14, fontWeight: 500, borderRadius: 0}}> 
                  All testimonials
                </Button>
            </div>
            <div className="feedbackDetails feedbackDvInCon p-9">
              <img src={feedbackMark} className="feedbackMark" />

              <Carousel data-bs-theme="dark" indicators={false} className="custom-carousel p-md-3" >
                <Carousel.Item>
                  <p style={{ fontSize: 16, lineHeight: '147%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et ante vitae lorem congue viverra. Mauris non aliquam quam. Mauris porta neque ut urna bibendum efficitur eget sed ex. Nulla facilisi. Duis justo risus, rhoncus eu tincidunt eu, fringilla a dolor.
                  </p>
                  <p className="countryFeed" style={{ marginTop: 46, fontSize: 16, fontWeight: 600}}>Camerron Nigeria</p>
                  <p className="" style={{ fontSize: 12, fontWeight: 500}}>Director, Niger Corp</p>
                </Carousel.Item>
            </Carousel>

           </div>
         </div>
       </div>
     </section>

    );
  }
 