import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #f0f4f8;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  width: 300px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  width: 300px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  resize: none;
`;

const SubmitButton = styled.button`
  background: #873737ff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;

const Contact: React.FC = () => (
  <ContactSection id="contact">
    <ContactTitle>Contact Me</ContactTitle>
    <ContactForm>
      <Input type="text" placeholder="Your Name" required />
      <Input type="email" placeholder="Your Email" required />
      <TextArea rows={5} placeholder="Your Message" required />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
  </ContactSection>
);

export default Contact;
