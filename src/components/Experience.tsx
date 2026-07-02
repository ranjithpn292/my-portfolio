import React from "react";
import styled from "styled-components";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  margin-bottom: 60px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: auto;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    width: 3px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Card = styled.div`
  margin-left: 70px;
  background: ${({ theme }) => theme.colors.card};
  padding: 35px;
  border-radius: 20px;
  margin-bottom: 40px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-6px);
    transition: 0.3s;
  }

  &::before {
    content: "";
    position: absolute;
    left: -61px;
    top: 35px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Company = styled.h3`
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Role = styled.h4`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Duration = styled.p`
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Description = styled.p`
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 25px 0;
`;

const Tech = styled.span`
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Achievements = styled.div`
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 15px;
`;

const experiences = [
  {
    company: "Synchrony International Services Pvt Ltd",
    role: "Full Stack Developer",
    duration: "Feb 2026 – Present",
    description:
      "Working on enterprise Pay Later solutions by developing React Micro Frontends (MFEs) and Spring Boot backend services. Contributing to scalable customer-facing applications with a focus on performance, maintainability and clean architecture.",
    tech: [
      "React",
      "TypeScript",
      "Java 17",
      "Spring Boot",
      "Micro Frontends",
      "REST APIs",
      "Git",
      "Agile",
    ],
    achievements: [
      "Developing the Pay Later Promo Editor Micro Frontend (MFE).",
      "Building reusable React and TypeScript components.",
      "Implementing Spring Boot backend enhancements and REST APIs.",
      "Collaborating with cross-functional teams using Agile Scrum.",
      "Resolving production issues and improving application performance.",
      "Participating in code reviews and deployment activities.",
    ],
  },
  {
    company: "DBS Technology Services India Pvt. Ltd",
    role: "Java Full Stack Engineer",
    duration: "Jul 2022 – Present",
    description:
      "Working as a Java Full Stack Engineer developing enterprise applications using React, Java 17, Spring Boot and Microservices across banking solutions.",
    tech: [
      "React",
      "TypeScript",
      "Java 17",
      "Spring Boot",
      "Microservices",
      "Docker",
      "MariaDB",
      "REST APIs",
    ],
    achievements: [
      "Designed and developed enterprise web applications.",
      "Built scalable Spring Boot REST APIs.",
      "Developed reusable React UI components.",
      "Worked with microservices architecture.",
      "Performed production support and bug fixes.",
      "Collaborated within Agile Scrum teams.",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <Title>Experience</Title>

      <Timeline>
        {experiences.map((exp) => (
          <Card key={`${exp.company}-${exp.role}`}>
            <Company>
              <FaBriefcase />
              {exp.company}
            </Company>

            <Role>{exp.role}</Role>

            <Duration>{exp.duration}</Duration>

            <Description>{exp.description}</Description>

            <TechStack>
              {exp.tech.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </TechStack>

            <Achievements>
              {exp.achievements.map((achievement) => (
                <Item key={achievement}>
                  <FaCheckCircle
                    size={18}
                    color="#22c55e"
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <span>{achievement}</span>
                </Item>
              ))}
            </Achievements>
          </Card>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
