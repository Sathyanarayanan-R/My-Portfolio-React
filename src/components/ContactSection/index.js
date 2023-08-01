import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h1 className="logo-text">Contact</h1>
      <div className="mail-contact mb-5">
        {/* <h4 className="px-2">Do you want to hire me?</h4>
        
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rsathyajana2000@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="btn btn-sm btn-success"
        >
          Let's Discuss
        </a> */}
      </div>
      <div className="mail-contact mb-5">
        <div className="contacts p-4 text-center">
          <i className="fad fa-envelope"></i> <span>rsathyajana2000@gmail.com</span>
        </div>
        <div className="contacts p-4 text-center">
          <i className="fad fa-mobile-alt"></i> <span>+91 8940727184</span>
        </div>
        <div className="contacts p-4 text-center mb-3">
          <i className="fad fa-map-marker-alt"></i>{" "}
          <span>Madurai, TamilNadu</span>
        </div>
      </div>
      <div className="footer mt-3">
        <span className="float-left">
          <a
            href="https://github.com/Sathyanarayanan-R"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-github"></i>
          </a>
          &emsp;
          <a
            href="https://www.linkedin.com/in/sathyanarayanan-r-562380202"
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-success btn-circle"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          &emsp;
        </span>
        <span>Copyright © 2023. </span>&emsp;{" "}
        <span> All Rights Reserved by Sathyanarayanan R </span>
      </div>
    </div>
  );
}

export default Contact;
