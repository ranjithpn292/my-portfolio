import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M184 48c-26.5 0-48 21.5-48 48v16H96c-35.3 0-64 28.7-64 64v32h512v-32c0-35.3-28.7-64-64-64h-40V96c0-26.5-21.5-48-48-48H184zm208 64H120V96c0-8.8 7.2-16 16-16h240c8.8 0 16 7.2 16 16v16zM32 224v176c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V224H32zm176 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
  </svg>
);

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

const CheckIcon = FaCheckCircle as React.ComponentType<{
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}>;

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
              <BriefcaseIcon />
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
                  <CheckIcon
                    size={18}
                    color="#22c55e"
                    style={{
                      minWidth: "18px",
                      marginTop: "3px",
                    }}
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
