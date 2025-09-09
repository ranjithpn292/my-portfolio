import React from "react";
import styled from "styled-components";
import profile from "../assets/ranjithpn.jpg";

const AboutSection = styled.section`
  display: flex;
  padding: 4rem 2rem;
  align-items: center;
  background: #f0f4f8;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-right: 2rem;
`;

const AboutText = styled.div`
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AboutParagraph = styled.p`
  line-height: 1.6;
  font-size: 1.5em;
`;

const About: React.FC = () => (
  <AboutSection id="about">
    <ProfileImage src={profile} alt="Profile" />
    <AboutText>
      <AboutTitle>About Me</AboutTitle>
      <AboutParagraph>
        I am a passionate Full Stack Developer with 3 years of experience
        building scalable web applications using React, TypeScript, Spring Boot,
        and microservices. I enjoy writing clean code, solving complex problems,
        and learning new technologies.
      </AboutParagraph>
    </AboutText>
  </AboutSection>
);

export default About;
