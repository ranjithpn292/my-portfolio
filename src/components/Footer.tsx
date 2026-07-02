import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const EnvelopeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16v16H4z" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 70px 8% 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled.h2`
  font-size: 32px;
`;

const Subtitle = styled.p`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 550px;
`;

const Socials = styled.div`
  display: flex;
  gap: 18px;
  margin: 35px 0;
`;

const Social = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Bottom = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TopButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  border: none;
  border-radius: 12px;

  padding: 12px 18px;

  cursor: pointer;

  display: flex;
  gap: 10px;
  align-items: center;

  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterSection>
      <Container>
        <Heading>Ranjith P N</Heading>

        <Subtitle>
          Java Full Stack Engineer passionate about building scalable enterprise
          applications using React, Java 17, Spring Boot, TypeScript and
          Microservices.
        </Subtitle>

        <Socials>
          <Social href="https://github.com/ranjithpn292" target="_blank">
            <FaGithub />
          </Social>

          <Social
            href="https://linkedin.com/in/ranjith-p-n-1761181b4"
            target="_blank"
          >
            <FaLinkedin />
          </Social>

          <Social href="mailto:pn.ranjith292@gmail.com">
            <EnvelopeIcon />
          </Social>
        </Socials>

        <Bottom>
          <Copyright>
            © {new Date().getFullYear()} Ranjith P N
            <br />
            Built with React, TypeScript, Styled Components & ❤️
          </Copyright>

          <TopButton onClick={scrollTop}>
            <FaArrowUp />
            Back to Top
          </TopButton>
        </Bottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
