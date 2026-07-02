import React from "react";
import styled from "styled-components";

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

const PhoneIcon = () => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72l.35 2.47a2 2 0 0 1-.57 1.71L8.09 10.91a16 16 0 0 0 5 5l2.01-1.77a2 2 0 0 1 1.71-.57l2.47.35A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
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
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

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
