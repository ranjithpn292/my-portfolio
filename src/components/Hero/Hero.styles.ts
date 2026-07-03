import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  padding: 0 8%;
  position: relative;
  overflow: hidden;

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    padding-top: 120px;
  }
`;

export const Left = styled(motion.div)`
  flex: 1;
  z-index: 2;
`;

export const Greeting = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 20px;
  font-weight: 600;
`;

export const Name = styled.h1`
  font-size: 68px;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 20px;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Role = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  max-width: 650px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const PrimaryButton = styled.a`
  padding: 16px 34px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const SecondaryButton = styled.a`
  padding: 16px 34px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.card};
  }
`;

export const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 420px;
  height: 420px;
  border-radius: 30px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.card};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;
