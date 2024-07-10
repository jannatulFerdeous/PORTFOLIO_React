import React, { useState } from "react";
import "./skills.Module.css";
import "./About.Module.css"
import { SkillCard } from "./SkillCard";
import { SKILLS } from "../utils/Data";
import { Container } from "react-bootstrap";
import { SkillsInfoCard } from "./SkillsInfoCard";

export const Skills = () => {
  const [selectSkills, setSelectSkills] = useState(SKILLS[0]);
  const handleSelectSkills = (data) => {
    setSelectSkills(data);
  };

  return (
    <section className="skills-container" id="Skills">
      <div className='about-title'>    
             <span>S</span>
             <span>K</span>
             <span>I</span>
             <span>L</span>
             <span>L</span>
             <span>S</span>
        </div>
        <div className="skills-contents">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectSkills.title === item.title} 
               OnClick={()=> { handleSelectSkills(item); }}      
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillsInfoCard
            heading={selectSkills?.title}
            skills={selectSkills?.skills}
          />
        </div>
      </div>    
    </section>
  );
};
