import React from "react";
import "./Skills.css";
// import { SkillsContainer } from "./SkillsElements";
import ProgressBar from "@ramonak/react-progress-bar";
function Skills() {
  return (
    <div className="skillsWrapper" id="skills">
      <h1 className="logo-text text-center py-md-5 py-xs-5">Skills</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12" data-aos="flip-left">
          <div className="skillName">
            <p>React</p>
            <ProgressBar
              completed={85}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>Node</p>
            <ProgressBar
              completed={80}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>Express</p>
            <ProgressBar
              completed={85}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>JavaScript</p>
            <ProgressBar
              completed={90}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>Linux</p>
            <ProgressBar
              completed={90}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>Python</p>
            <ProgressBar
              completed={90}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12" data-aos="flip-right">
          <div className="skillName">
            <p>MongoDB</p>
            <ProgressBar
              completed={85}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>MySql</p>
            <ProgressBar
              completed={80}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>Git</p>
            <ProgressBar
              completed={70}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>HTML</p>
            <ProgressBar
              completed={80}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>CSS</p>
            <ProgressBar
              completed={80}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
          <div className="skillName">
            <p>Django</p>
            <ProgressBar
              completed={95}
              bgColor="#01bf71"
              height="15px"
              isLabelVisible={true}
              baseBgColor="#ffffff"
              labelColor="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
