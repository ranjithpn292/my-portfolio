import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillItem = styled.div`
  background: #873737ff;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;

const skills = [
  "React",
  "TypeScript",
  "Redux",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
  "Kafka",
  "Microservices",
];

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #873737ff;
`;

const SkillLabel = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SkillBarBackground = styled.div`
  width: 100%;
  background: #0c0c0cff;
  border-radius: 0.5rem;
  height: 10px;
`;

const SkillBar = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  background: #aea5a6ff;
  height: 10px;
  border-radius: 0.5rem;
  transition: width 1s ease-in-out;
`;

const Skills: React.FC = () => (
  <SkillsSection id="skills">
    <SkillsTitle>Skills</SkillsTitle>
    <SkillList>
      {skills.map((skill) => (
        <SkillItem key={skill}>{skill}</SkillItem>
      ))}
    </SkillList>
    <SkillsSection id="skills">
      <SkillsTitle>My Skills</SkillsTitle>

      <SkillCategory>
        <CategoryTitle>Languages</CategoryTitle>
        <SkillItem>
          <SkillLabel>Java</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>JavaScript</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="90%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Frontend</CategoryTitle>
        <SkillItem>
          <SkillLabel>React JS</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="90%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>Redux</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>Webpack</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="75%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>Module Federation</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="70%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Backend</CategoryTitle>
        <SkillItem>
          <SkillLabel>Spring Boot</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>Express.js</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="80%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>Node.js</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="80%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Databases</CategoryTitle>
        <SkillItem>
          <SkillLabel>MySQL</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>MariaDB</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="80%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>CS Fundamentals</CategoryTitle>
        <SkillItem>
          <SkillLabel>Data Structures & Algorithms</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="80%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Tools</CategoryTitle>
        <SkillItem>
          <SkillLabel>Git</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="90%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>JIRA</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>IntelliJ</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="80%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>VS Code</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="95%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Cloud & DevOps</CategoryTitle>
        <SkillItem>
          <SkillLabel>PCF</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="75%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>Docker</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>JMeter</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="70%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>

      <SkillCategory>
        <CategoryTitle>Methodologies</CategoryTitle>
        <SkillItem>
          <SkillLabel>Agile (Scrum)</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="85%" />
          </SkillBarBackground>
        </SkillItem>
        <SkillItem>
          <SkillLabel>REST APIs</SkillLabel>
          <SkillBarBackground>
            <SkillBar width="90%" />
          </SkillBarBackground>
        </SkillItem>
      </SkillCategory>
    </SkillsSection>
  </SkillsSection>
);

export default Skills;
