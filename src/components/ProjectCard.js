import { Col } from "react-bootstrap";
import './ProjectCard.Module.css'

export const ProjectCard = ({ title, description, image,link ,icon1, icon2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <a href={link}> <img src={image} alt=" Project images"/></a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className=" icon">
            <img src={icon1} alt=" Project images"/>
            <img src={icon2} alt=" Project images"/>
            </div>
        </div>
      </div>
    </Col>
  )
}