import React from "react";
import styled from "styled-components";
import profile from "../assets/ranjithpn.jpg";
import { FaCheckCircle } from "react-icons/fa";

const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  margin-bottom: 60px;
`;

const Item = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 320px;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 260px;
  }
`;

const Content = styled.div`
  flex: 1.4;
`;

const Heading = styled.h3`
  font-size: 34px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: 35px;
`;

const Highlights = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Highlight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
`;

const About = () => {
  return (
    <Section id="about">
      <Title>About Me</Title>

      <Wrapper>
        <ImageWrapper>
          <Image src={profile} alt="Ranjith P N" />
        </ImageWrapper>

        <Content>
          <Heading>Passionate Java Full Stack Engineer</Heading>

          <Description>
            I&aposm a Java Full Stack Engineer with 4+ years of experience
            building enterprise-grade web applications using React, TypeScript,
            Java 17, Spring Boot, and Microservices.
            <br />
            <br />
            Currently, I work at <strong>DBS Technology Services</strong>,
            contributing to enterprise banking solutions for
            <strong> Synchrony Financial</strong>. I enjoy solving complex
            problems, designing scalable systems, and delivering clean,
            maintainable code.
          </Description>

          <Highlights>
            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              4+ Years Experience
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              DBS Technology Services
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              Synchrony Financial
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              React & TypeScript
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              Java 17 & Spring Boot
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              Microservices Architecture
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              Banking Domain
            </Highlight>

            <Highlight>
              <Item>
                <FaCheckCircle
                  style={{
                    color: "#22c55e",
                    minWidth: "18px",
                    fontSize: "18px",
                  }}
                />
                Built React Micro Frontends
              </Item>
              REST APIs
            </Highlight>
          </Highlights>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default About;
