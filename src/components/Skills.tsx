import * as React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.surface};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 42px;
  margin-bottom: 60px;
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
`;

const Category = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 30px;
`;

const CategoryTitle = styled.h3`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 24px;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Badge = styled.span`
  padding: 10px 18px;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Webpack",
    ],
  },
  {
    title: "Backend",
    items: [
      "Java 17",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Database",
    items: ["MariaDB", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "PCF"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Jenkins",
      "SonarQube",
      "Nexus IQ",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <Title>Technical Skills</Title>

      <Grid>
        {skills.map((category) => (
          <Category key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>

            <BadgeContainer>
              {category.items.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </BadgeContainer>
          </Category>
        ))}
      </Grid>
    </Section>
  );
};

export default Skills;
