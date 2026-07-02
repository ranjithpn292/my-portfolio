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

export const ExternalLinkIcon = () => (
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
    <path d="M14 3h7v7" />
    <path d="M10 14L21 3" />
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
);

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
