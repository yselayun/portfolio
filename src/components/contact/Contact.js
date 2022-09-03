import React from "react";
import "./contact.css";
import {MdOutlineMail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_llcegzn', 'template_zndo8ft', form.current, 'zxIlOIGy7qr-EVcKU')
      .then((result) => {
          console.log(result.text);

          //reset
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return(
    <section id="contact">
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__option">
          <article className="contact__block-option">
            <MdOutlineMail className="contact__option-icon"/>
            <h3>Email</h3>
            <h5 className="text-light">yselayun@gmail.com</h5>
            <a href="mailto:yselayun@gmail.com" target="blank">send a message</a>
          </article>
          <article className="contact__block-option">
            <BsMessenger className="contact__option-icon"/>
            <h3>Messager</h3>
            <h5 className="text-light">Y Sel Ayun</h5>
            <a href="https://m.me/s.sel.ayun" target="blank">send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = 'name' placeholder="Your Full Name" required/>
          <input type="text" name = 'email' placeholder="Your Email" required/>
          <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary" >Send Message</button>
      </form>
      </div>
      
    </section>
  );
}
export default Contact;