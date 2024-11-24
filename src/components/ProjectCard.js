import { Col } from 'react-bootstrap';
import './ProjectCard.Module.css';

export const ProjectCard = ({
  title,
  description,
  image,
  link1,
  link2,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="image-size" src={image} alt=" Project images" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className=" icon">
            <img src={icon1} alt=" Project images" />
            <img src={icon2} alt=" Project images" />
            <img src={icon3} alt=" Project images" />
            <img src={icon4} alt=" Project images" />
            <img src={icon5} alt=" Project images" /> <br />
            <button className="buttonLink">
              <a href={link1} className="hyperlink">
                Live Link
              </a>
            </button>{' '}
            &nbsp;
            <button className="buttonLink">
              <a href={link2} className="hyperlink">
                GitHub Link
              </a>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};
