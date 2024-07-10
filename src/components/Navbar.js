import React, {useState, useEffect} from 'react'
import "./Navbar.Module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.svg';
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaHackerrank } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineSun } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";



export const NavBar=() => {
  
    const [activeLink, setActiveLink] = useState('home'); 
    const [scrolled,setScrolled] = useState(false); 
    console.log(scrolled)
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true); 
            } 
            else{
                setScrolled(false); 
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll",onScroll); 
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value); 

    }
  
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home" className='heaven'><span>Heaven</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')} >About</Nav.Link>
          <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#Portfolio" className={activeLink === 'portfolio' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
          <Nav.Link href="#Contact" className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>         
        </Nav>
        <span className="navbar-text">
            <div className='social-icon'>
                
                <a href='https://www.linkedin.com/in/jannatulferdeous/' target="_blank"><span className='iconStyle'><FaLinkedinIn /></span></a>
                <a href='https://www.facebook.com/profile.php?id=100018406239118&mibextid=ZbWKwL' target="_blank"><span className='iconStyle' target="_blank"><FaFacebook/></span></a>
                <a href='#'><span className='iconStyle' target="_blank"><FaInstagram /></span></a>
                <a href='#'><span className='iconStyle' target="_blank"><FaHackerrank/></span></a>
                <a href='https://github.com/jannatulFerdeous'><span className='iconStyle' target="_blank"><FaGithub/></span></a>
                
         
            </div>
        <a href="#Contact"><button className='vvd'>Let's Connect</button></a>
        
        {/* <a className='social-icon'><span className='iconStyle'><AiOutlineSun /></span></a>
        <a className='social-icon'><span className='iconStyle'><BsMoon/></span></a> */}
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
