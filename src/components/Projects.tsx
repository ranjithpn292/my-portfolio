import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding: 4rem 2rem;
  background: #f0f4f8;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ProjectCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  color: #873737ff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const projects = [
  {
    title: "AI-Powered Resume Builder",
    description:
      "Generates resumes dynamically using React frontend and Spring Boot backend.",
    tech: "React, TypeScript, Spring Boot, PostgreSQL",
    link: "https://github.com/ranjithpn292/resume_builder",
  },
  {
    title: "Bike Renting App",
    description: "Platform for renting bikes using microservices architecture.",
    tech: "React, Spring Boot, Docker",
    link: "https://github.com/ranjithpn292/ride-sharing-app",
  },
];

const Projects: React.FC = () => (
  <ProjectsSection id="projects">
    <ProjectsTitle>Projects</ProjectsTitle>
    <ProjectsGrid>
      {projects.map((proj) => (
        <ProjectCard key={proj.title}>
          <ProjectTitle>{proj.title}</ProjectTitle>
          <ProjectDescription>{proj.description}</ProjectDescription>
          <p>
            <em>{proj.tech}</em>
          </p>
          <ProjectLink href={proj.link} target="_blank">
            View on GitHub
          </ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsGrid>
  </ProjectsSection>
);

export default Projects;
