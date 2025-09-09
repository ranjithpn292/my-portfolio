import React from "react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const ExperienceTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Company = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const TimePeriod = styled.p`
  color: #555;
`;

const experiences = [
  {
    title: "Java Full Stack Developer",
    company: "DBS Technology Services INDIA Pvt Ltd",
    time: "Jul 2022 – Present",
  },
];

const Experience: React.FC = () => (
  <ExperienceSection id="experience">
    <ExperienceTitle>Experience</ExperienceTitle>
    {experiences.map((exp) => (
      <ExperienceItem key={exp.title}>
        <JobTitle>{exp.title}</JobTitle>
        <Company>{exp.company}</Company>
        <TimePeriod>{exp.time}</TimePeriod>
      </ExperienceItem>
    ))}
  </ExperienceSection>
);

export default Experience;
