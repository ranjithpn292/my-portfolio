import React from "react";
import styled, { keyframes } from "styled-components";
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
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, #bb8798ff);
  color: white;
  text-align: center;
  padding: 2rem;
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
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

const typing = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
`;

const Letter = styled.span<{ delay: number }>`
  opacity: 0;
  animation: ${typing} 0.3s forwards;
  animation-delay: ${({ delay }) => delay}s;
  display: inline-block;
`;


const HeroAndSkills: React.FC = () => (
  <Container>
    <HeroSection>
      <HeroTitleComponent />
      <HeroSubtitle>
        Full Stack Developer | React | TypeScript | Spring Boot
      </HeroSubtitle>
      <HeroButtons>
        <HeroButton
          href="https://drive.google.com/file/d/1WQYpBRM9dzkSTSEpWZv6TGFfMnaczOom/view?usp=drive_link"
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

export const HeroTitleComponent = () => {
  const text = "Hi, I am Ranjith P N";

  return (
    <StyledHeroTitle>
      {text.split('').map((char, index) => (
        <Letter key={index} delay={index * 0.05}>
          {char === ' ' ? '\u00A0' : char}
        </Letter>
      ))}
    </StyledHeroTitle>
  );
};

export default HeroAndSkills;
