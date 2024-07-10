import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Contact.Module.css';
import "./About.Module.css";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';
import lottie from 'lottie-web';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const form = useRef();
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData:require('../assets/img/Animation - 1718006980725.json')
    });
  }, []);

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs.sendForm('service_9qvpall', 'template_8v2jvbo', form.current, 'Ul7uGhs2H5_BIVAyo')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setButtonText('Send');
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully!' });
      }, (error) => {
        console.log('FAILED...', error.text);
        setButtonText('Send');
        setStatus({ success: false, message: 'Failed to send the message. Please try again.' });
      });
  };

  return (
    <section className='contact' id='Contact'>
      <div className="about-title">
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
        <span>&nbsp;M</span>
        <span>E</span>
      </div>
      <Container>
        <Row className='align-item-center'>
          <Col md={6}>
          <div className='container' ref={container}></div>
          </Col>
          <Col md={6}>
            <form ref={form} onSubmit={sendEmail}>
              <Row >
                <Col sm={6} className='px-1'>
                  <input type='text' placeholder='FirstName' name="firstName" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='text' placeholder='LastName' name="lastName" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='email' placeholder='Email' name="email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col sm={6} className='px-1'>
                  <input type='phone' placeholder='Phone Number' name="phone" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col>
                  <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {status.message &&
                  <Col>
                    <p className={status.success === false ? "error" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
