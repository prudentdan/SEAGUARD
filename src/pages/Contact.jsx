import Header from '../components/Header';
import ContactCompo from '../components/ContactCompo';
import Footer from '../components/Footer';
import  '../index.css';
import  '../assets/main.css';

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
            <div className="aboutTitleDiv">
                <div className=" aboutTitleImgOver">
                    <div className="aboutTitleImgOverIn flex items-end">
                        <h2 className="aboutTitle mb-5">Contacts</h2>
                    </div>
                </div>
            </div>
            <div className="contactGetDivPar flex items-center justify-center">
                <div className="contactGetDiv flex items-center justify-between">
                    <div className="contactGetDivInLeft flex-col items-center justify-center">
                        <p className="my-5">CONTACT DETAILS</p>
                        <h3 className="abouth2Size my-5">NEED HELP?</h3>
                        <p className="my-5">We are committed to providing excellent customer service. <br />Please do not hesitate to contact us with any questions or concerns.</p>

                        <div className="contactLocDiv my-5 mx-9">
                            <div className="contactLocDivIn flex items-center justify-start gap-1 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="footerSvg contactSvg">
                                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>

                                <p>61, Payne Crescent, Apapa, Lagos State, Nigeria.</p>
                            </div>
                        
                            <div className="contactLocDivIn flex items-center justify-start gap-1 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="footerSvg contactSvg">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                                </svg>
                                info@seaguardservices.com.ng
                            </div>
                            <div className="contactLocDivIn flex items-center justify-start gap-1 mb-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="footerSvg contactSvg">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>

                                +234.(0)802 328 9389
                            </div>
                        </div>
                        

                    </div>


                    <ContactCompo />
                </div>
            </div>
            <div className="googleMapDiv py-8">
                <div className="googleMapDivIn">
                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" style={mapStyle}></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}