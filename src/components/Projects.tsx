import React from "react";
import styled from "styled-components";
import { GithubIcon, ExternalLinkIcon } from "../assets/icons/Icons";

const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  margin-bottom: 70px;
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 40px;

  background: ${({ theme }) => theme.colors.card};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 20px;

  overflow: hidden;

  transition: 0.35s;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.div`
  background: linear-gradient(135deg, #7c3aed, #38bdf8);

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 32px;

  font-weight: bold;

  color: white;

  min-height: 250px;
`;

const Content = styled.div`
  padding: 35px;
`;

const ProjectTitle = styled.h3`
  font-size: 30px;
`;

const Description = styled.p`
  margin: 20px 0;

  line-height: 1.8;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

const BadgeContainer = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 12px;

  margin-bottom: 25px;
`;

const Badge = styled.span`
  padding: 8px 16px;

  border-radius: 999px;

  background: rgba(124, 58, 237, 0.15);

  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Features = styled.ul`
  margin-bottom: 25px;

  padding-left: 20px;

  line-height: 2;
`;

const Buttons = styled.div`
  display: flex;

  gap: 20px;
`;

const Button = styled.a`
  padding: 12px 24px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  border-radius: 10px;

  text-decoration: none;

  font-weight: 600;

  display: flex;

  align-items: center;

  gap: 10px;
`;

const projects = [
  {
    title: "Agrigo",

    image: "AGRIGO",

    description:
      "A full-stack agriculture marketplace connecting farmers and buyers with scalable microservices architecture.",

    tech: ["React", "Spring Boot", "Java", "Docker", "MariaDB"],

    features: [
      "JWT Authentication",

      "REST APIs",

      "Microservices",

      "Responsive UI",
    ],

    github: "https://github.com/ranjithpn292/agrigo-mfe",

    demo: "#",
  },

  {
    title: "AI Code Review Agent",

    image: "AI",

    description:
      "AI-powered backend application that detects code smells and suggests fixes for Java microservices.",

    tech: ["Java", "Spring Boot", "OpenAI", "Docker"],

    features: [
      "Static Analysis",

      "AI Suggestions",

      "REST API",

      "Sonar Integration",
    ],

    github: "https://github.com/ranjithpn292/resume_builder",

    demo: "#",
  },
];

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Featured Projects</Title>

      <Grid>
        {projects.map((project) => (
          <Card key={project.title}>
            <Image>{project.image}</Image>

            <Content>
              <ProjectTitle>{project.title}</ProjectTitle>

              <Description>{project.description}</Description>

              <BadgeContainer>
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </BadgeContainer>

              <Features>
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Features>

              <Buttons>
                <Button href={project.github} target="_blank">
                  <GithubIcon />
                  GitHub
                </Button>

                <Button
                  href={project.demo}
                  target="_blank"
                  aria-disabled={true}
                >
                  <ExternalLinkIcon />
                  Live Demo
                </Button>
              </Buttons>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
