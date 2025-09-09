import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  padding: 2rem;
  text-align: center;
  background: #873737ff;
  color: white;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;

  &:hover {
    color: #f1f1f1;
  }
`;

const Footer: React.FC = () => (
  <FooterSection>
    <SocialLinks>
      <SocialLink
        href="https://github.com/ranjithpn292?tab=repositories"
        target="_blank"
      >
        GitHub
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/ranjith-p-n-1761181b4/"
        target="_blank"
      >
        LinkedIn
      </SocialLink>
    </SocialLinks>
    &copy; {new Date().getFullYear()} Ranjith P N. All rights reserved.
  </FooterSection>
);

export default Footer;
