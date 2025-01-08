import React from "react";
import "./About.css";
import Me from "../../Images/profile.jpg";
import { InfoContainer } from "./AboutElements";
function About() {
  return (
    <>
      <InfoContainer lightBg={false} id="about">
        <h1 className="logo-text text-center py-md-5 py-xs-5">About Me</h1>
        <div className="row">
          <div
            className="col-md-5 col-sm-12 mb-3  aboutImg"
            data-aos="fade-right"
          >
            <img src={Me} alt="my profile" />
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p>
            Ambitious and technically adept Full Stack Developer with 5 years of industry experience, specializing in React and Django development. My career is marked by a track record of building robust systems that enhance user interface and experience, achieving a 99.9% uptime for business-critical applications, and notably improving system efficiencies.
            </p>

            <a
              className="btn btn-sm btn-success mt-3"
              rel="noreferrer"
              href="https://drive.google.com/file/d/13rxEL8xTzpYiYaJgU6G5Sp1ob13oMWt7/view?usp=share_link"
              target="_blank"
              download
            >
              Download <i className="fad fa-download"></i>
            </a>
          </div>
        </div>
        {/* <InfoWrapper>
               <h2>About</h2> 
                <InfoRow imgStart={false}>
                    <Column2>
                        <ImgWrap>
                            <Img src={Me} alt='My Image' />
                        </ImgWrap>
                    </Column2>
                    <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading lightText={true}>Heading</Heading>
                            <Subtitle darkText={false}>Subtitle</Subtitle>
                        </TextWrapper>
                    </Column1>
                </InfoRow>
            </InfoWrapper> */}
      </InfoContainer>
    </>
  );
}

export default About;
