import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 50px;
  background: #f5f5f5;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary}
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}
  }
`;

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // from EmailJS
        "YOUR_TEMPLATE_ID", // from EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // from EmailJS
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="Your Name" required />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <TextArea name="message" rows={5} placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
