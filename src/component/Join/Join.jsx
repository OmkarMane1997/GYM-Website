import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const sendEmail = (e) => {
    e.preventDefault();
// alert();
    emailjs.sendForm('Service', 'template', form.current, 'key')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
   

  const form = useRef();
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span className="stroke-text">YOUR BODY</span>
          <span> WITH US ?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} autoComplete='off' className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Enter your Email join"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;


