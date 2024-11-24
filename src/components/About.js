import React from 'react';
import './About.Module.css';
import './skills.Module.css';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import aboutImg1 from '../assets/img/about-1.jpg';
import aboutImg2 from '../assets/img/about-2.jpg';
import aboutImg3 from '../assets/img/about-3.jpg';
import aboutImg4 from '../assets/img/about-4.jpg';

export const About = () => {
  return (
    <section className={'about' + 'skills-container'} id="About">
      <div className="about-title">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span>&nbsp;M</span>
        <span>E</span>
      </div>

      <div className="about-container">
        <div className="about-data">
          <div className="about-info">
            <h3>Personal Details</h3>
          </div>
          <div className="about-details-parents">
            <div className="about-details">
              <p>
                FirstName: <span>Jannatul</span>
              </p>
              <p>
                LastName: <span>Ferdeous</span>
              </p>
              <p>
                Gender: <span>Female</span>
              </p>
              <p>
                Age: <span>23</span>
              </p>
              <p>
                Religion:<span> Islam</span>
              </p>
            </div>
            <div className="about-details">
              <p>
                Nationality: <span>Bangladeshi</span>
              </p>
              <p>
                Address:<span> Kuril, Dhaka, Bangladesh</span>
              </p>
              <p>
                Phone: <span> +880 198 2108 165</span>
              </p>
              <p>
                Email: <span>jannatul.gub@gmail.com</span>
              </p>
              <p>
                Language:<span> Bengali, English, Hindi, Italy(few)</span>
              </p>
            </div>
          </div>
        </div>

        <div className="gallery">
          <figure className="card">
            <img src={aboutImg1} alt="" />
          </figure>
          <figure className="card">
            <img src={aboutImg2} alt="" />
          </figure>
          <figure className="card">
            <img src={aboutImg3} alt="" />
          </figure>
          <figure className="card">
            <img src={aboutImg4} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
};
