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
            Courteous and enthusiastic, I have over 3.5 years of working experience in the IT industry. Basically, I love programming & interested in Software Development. I recently began to be fascinated by web programming, e.g., developing apps and building websites. I gained some experience of working in this area. Furthermore, I am keen to gain more experience in this field, for this reason, I am looking for a company willing to offer me a placement among their developers. In return, I would offer my full commitment, and be a pleasant and friendly addition to your team, I am therefore currently looking for a job as a Full Stack Developer.
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
