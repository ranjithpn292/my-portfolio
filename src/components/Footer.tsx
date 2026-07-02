import React from "react";
import styled from "styled-components";

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    fill="currentColor"
  >
    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-168 168c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 149.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V149.3l113.4 113.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-168-168z" />
  </svg>
);

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

const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.69-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.56-.29-5.25-1.28-5.25-5.68 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.17a10.97 10.97 0 0 1 5.79 0c2.21-1.48 3.18-1.17 3.18-1.17.62 1.59.23 2.77.11 3.06.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.39-5.26 5.68.41.35.77 1.03.77 2.08v3.08c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.84v1.71h.06c.53-1.01 1.84-2.08 3.79-2.08C21.21 8.63 22 10.4 22 13.18V21h-4v-6.93c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V21h-4V9Z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 21h14" />
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
            <GithubIcon />
          </Social>

          <Social
            href="https://linkedin.com/in/ranjith-p-n-1761181b4"
            target="_blank"
          >
            <LinkedinIcon />
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
            <ArrowUpIcon />
            Back to Top
          </TopButton>
        </Bottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
