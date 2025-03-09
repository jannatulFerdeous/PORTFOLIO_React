import React from "react";
import "./About.Module.css";
import "./skills.Module.css";

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import aboutImg1 from "../assets/img/about-1.jpg";
import aboutImg2 from "../assets/img/about-2.jpg";
import aboutImg3 from "../assets/img/about-3.jpg";
import aboutImg4 from "../assets/img/about-4.jpg";

import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const About = () => {
  return (
    <section className="about-section">
      <div className="about-title">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
        <span>&nbsp;M</span>
        <span>E</span>
      </div>

      <div className="container">
        <div className="content-grid">
          {/* Left Column - Personal Info */}
          <div className="info-column">
            <div className="info-card">
              <h2>Jannatul Ferdeous</h2>
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="icon" />
                  <span>jannatul.gub@gmail.com</span>
                </div>
                <div className="contact-item">
                  <Phone className="icon" />
                  <span>+880 198 2108 165</span>
                </div>
                <div className="contact-item">
                  <MapPin className="icon" />
                  <span>Kuril, Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="info-card">
              <div className="section-header">
                <GraduationCap className="icon-large" />
                <h2>Education</h2>
              </div>
              <div className="education-list">
                <div className="education-item">
                  <h3>Bachelor of Science in Computer Science</h3>
                  <p className="year">2020 - 2024</p>
                  <p className="school">Green University of Bangladesh</p>
                  <p className="school">Mejor in Machine Learning</p>
                </div>
                <div className="education-item">
                  <h3>Higher Secondary Certificate</h3>
                  <p className="year">2017 - 2019</p>
                  <p className="school">Banani Bidyaniketon School & College</p>
                </div>
                <div className="education-item">
                  <h3>Secondary School Certificate</h3>
                  <p className="year">2015 - 2017</p>
                  <p className="school">Kashba Adarsha School </p>
                </div>
                <div className="education-item">
                  <h3>Junior School Certificate</h3>
                  <p className="year">2014</p>
                  <p className="school">Badda Alatunnessa School & College </p>
                </div>
                <div className="education-item">
                  <h3>Primary School Certificate</h3>
                  <p className="year">2012</p>
                  <p className="school">Badda Alatunnessa School & College </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Slider */}
          <div className="slider-container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper-custom"
            >
              <SwiperSlide className="swiper-slide-custom">
                <img src={aboutImg1} alt="Coding" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <img src={aboutImg2} alt="Development" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <img src={aboutImg3} alt="Code" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide-custom">
                <img src={aboutImg4} alt="Programming" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
