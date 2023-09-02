import React, { useState } from 'react';
export default function ContactCompo() {

  // const [formData, setFormData] = useState({
  //   Name: '',
  //   Email: '',
  //   Message: '',
  // });

  
  // const handleInputChange = (e) => {
  //   const { Name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData, // Spread existing state
  //     [Name]: value, // Update the specific field
  //   }));
  // };

  function Submit(e) {
    const contactFormName = document.getElementById("Name");
    const contactFormEmail = document.getElementById("Email");
    const contactFormMessage = document.getElementById("Message");

    const contactFormSuccessAlert = document.getElementById("alertDiv1");
    const contactFormErrorAlert = document.getElementById("alertDiv2");
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    e.preventDefault()
    // console.log("submitted");
    // console.log(formDatab);
    
    let contactFormNameVal = contactFormName.value;
    let contactFormEmailVal = contactFormEmail.value;
    let contactFormMessageVal = contactFormMessage.value;
    // console.log(contactFormNameVal);

    if(contactFormNameVal!='' && contactFormEmailVal!='' && contactFormMessageVal !=''){

    fetch(
      "https://script.google.com/macros/s/AKfycbwDhG2gby4qKiechtJK_K6sFvRJKjXbxPk8Gss1hokwBSYWbatm4aEKsCNwxRfldGht/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    //   .then((res) => res.json())
      .then((data) => {
          // console.log(data);
          // Fade In
          contactFormSuccessAlert.style.opacity = '1';

          // Delay
          setTimeout(() => {
              // Fade Out
              contactFormSuccessAlert.style.opacity = '0';
          }, 5000);
        
        // setFormData({
        //   Name: '',
        //   Email: '',
        //   Message: '',
        // });
      
      })
      .catch((error) => {
        console.log('Error submitting form: ',error);
      });
    }
    else{
      // Fade In
      contactFormErrorAlert.style.opacity = '1';

      // Delay
      setTimeout(() => {
        // Fade Out
        contactFormErrorAlert.style.opacity = '0';
      }, 5000);
    
    }
  }
  
  return (
    <>
      <form onSubmit={(e) => Submit(e)} className="contactGetDivInRight">
        <span className=" contactInput items-center justify-center">

          <input className="contactInputTxt" placeholder="Your Name" name="Name" id="Name" type="text"/>
          <input  className="contactInputTxt" placeholder="Your Email" name="Email" id="Email" type="email"/>
          <textarea className="contactInputTxtarea" placeholder="Your Message" name="Message" id="Message" type="text"></textarea>
          <button className="contactusBtn" name="Send" type="submit">SEND MESSAGE</button>

        </span>
      </form>
    </>
  );
}
