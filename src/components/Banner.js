import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Mine-modified.png";
import "./Banner.Module.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontend Developer", "Web Designer", "Programmer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const openResumeInNewTab = () => {
    window.open("/CV-Jannatul_Ferdeous.pdf", "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio!</span>
            <h1>
              {`Hello! I am Jannatul Ferdeous `}
            <span className="wrap">{text}</span>
            </h1>
            <p>
              I am a recent graduate from the Green University of
              Bangladesh, where I completed my degree in 2024. My journey in the
              world of Web Development as a Software Engineer began with a
              genuine curiosity to understand how these technologies can reshape
              industries and improve lives.
            </p>
              <a href="#About"><button>Get Started</button></a>
              <button onClick={openResumeInNewTab}>My Resume</button>
          </Col>
       
          <Col xs={12} md={6} xl={5} style={{ paddingLeft: '220px' }}>
            <img
              src={headerImg}
              alt="Header image"
              style={{ width: 300, height: 300 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
