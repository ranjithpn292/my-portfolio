import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.jpg"; // Optional profile image
import DragDownArrow from "./DragDownArrow";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #873737ff, #bb8798ff);
  color: white;
  text-align: center;
  padding: 2rem;
`;

const SkillsSection = styled.section`
  flex: 1;
  background: #fff;
  padding: 4rem 2rem;
  text-align: center;
  color: #333;
  overflow-y: auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const HeroButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const HeroButton = styled.a`
  background-color: white;
  color: #873737ff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const HeroAndSkills: React.FC = () => (
  <Container>
    <HeroSection>
      <HeroTitle>Hi, I'm Ranjith P N</HeroTitle>
      <HeroSubtitle>
        Full Stack Developer | React | TypeScript | Spring Boot
      </HeroSubtitle>
      <HeroButtons>
        <HeroButton
          href="https://drive.google.com/file/d/1N4lGAZ3ejsCYJSqLVtorMfSBjJw5tkWA/view?usp=drive_link"
          target="_blank"
        >
          Download Resume
        </HeroButton>
        <HeroButton href="#contact">Contact Me</HeroButton>
      </HeroButtons>
      <DragDownArrow />
    </HeroSection>
  </Container>
);

export default HeroAndSkills;
