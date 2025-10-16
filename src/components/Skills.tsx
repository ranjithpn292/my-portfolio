import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: #f9f9fb;
  text-align: center;
`;

const SkillsTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: #222;
  font-weight: 700;
  letter-spacing: 1px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 2rem;
  width: 240px;
  height: 280px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-8px);
  }
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin: 3rem 0 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: left;
`;

const CategoryWrapper = styled.div`
  margin: 2rem 0;
`;

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", value: 90 },
      { name: "Redux", value: 85 },
      { name: "TypeScript", value: 80 },
      { name: "Webpack", value: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot", value: 85 },
      { name: "Node.js", value: 80 },
      { name: "Express.js", value: 80 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MariaDB", value: 85 },
      { name: "MySQL", value: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Docker", value: 85 },
      { name: "PCF", value: 75 },
      { name: "Kubernetes", value: 70 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", value: 90 },
      { name: "VS Code", value: 95 },
      { name: "IntelliJ", value: 85 },
    ],
  },
];

const Skills: React.FC = () => (
  <SkillsSection id="skills">
    <SkillsTitle>My Skills</SkillsTitle>

    {skillsData.map((cat, i) => (
      <CategoryWrapper key={i}>
        <CategoryTitle>{cat.category}</CategoryTitle>
        <SkillsGrid>
          {cat.items.map((skill, idx) => (
            <SkillCard
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Proficiency", value: skill.value },
                      { name: "Remaining", value: 100 - skill.value },
                    ]}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                  >
                    <Cell key="filled" fill="#873737" />
                    <Cell key="remaining" fill="#e4e4e4" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <SkillName>{skill.name}</SkillName>
              <p style={{ fontWeight: 600, color: "#555" }}>{skill.value}%</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </CategoryWrapper>
    ))}
  </SkillsSection>
);

export default Skills;
