import * as React from "react";
import styled from "styled-components";
import {
  DownloadIcon,
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
} from "../assets/icons/Icons";

const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.surface};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: auto auto 60px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 35px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  font-size: 17px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
`;

const TextArea = styled.textarea`
  padding: 15px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  resize: none;
`;

const Button = styled.button`
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Let&aposs Build Something Great</Title>

      <Subtitle>
        I&aposm currently open to Full Stack Engineer opportunities, freelance
        projects and exciting collaborations.
      </Subtitle>

      <Container>
        <Card>
          <Info>
            <EnvelopeIcon />
            pn.ranjith292@gmail.com
          </Info>

          <Info>
            <PhoneIcon />
            +91 91773 88913
          </Info>

          <Info>
            <LocationIcon />
            Bangalore, India
          </Info>

          <Socials>
            <SocialLink href="https://github.com/ranjithpn292" target="_blank">
              <GithubIcon />
            </SocialLink>

            <SocialLink
              href="https://linkedin.com/in/ranjith-p-n-1761181b4"
              target="_blank"
            >
              <LinkedinIcon />
            </SocialLink>

            <SocialLink
              href="https://drive.google.com/file/d/1T3POsbPeucPHNzZ9he1ymmkVz7myeVHG/view?usp=drive_link"
              target="_blank"
            >
              <DownloadIcon />
            </SocialLink>
          </Socials>
        </Card>

        <Card>
          <Form>
            <Input placeholder="Your Name" />

            <Input placeholder="Your Email" />

            <TextArea rows={6} placeholder="Your Message" />

            <Button>Send Message</Button>
          </Form>
        </Card>
      </Container>
    </Section>
  );
};

export default Contact;
