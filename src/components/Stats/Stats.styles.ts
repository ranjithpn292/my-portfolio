import styled from "styled-components";
import { motion } from "framer-motion";

export const StatsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 80px 8%;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 40px;
  text-align: center;
  transition: 0.35s;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const Number = styled.h2`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;
`;
