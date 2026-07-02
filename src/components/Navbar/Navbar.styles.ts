import styled from "styled-components";

export const Header = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  padding: 18px 8%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  backdrop-filter: blur(14px);

  transition: ${({ theme }) => theme.transition};

  background: ${({ scrolled }) =>
    scrolled ? "rgba(9,9,11,.85)" : "transparent"};

  border-bottom: ${({ scrolled, theme }) =>
    scrolled ? `1px solid ${theme.colors.border}` : "none"};
`;

export const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;

  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 15px;

  font-weight: 500;

  position: relative;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";

    position: absolute;

    left: 0;

    bottom: -6px;

    width: 0;

    height: 2px;

    background: ${({ theme }) => theme.colors.primary};

    transition: 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const ResumeButton = styled.a`
  padding: 12px 24px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-weight: 600;

  transition: ${({ theme }) => theme.transition};

  box-shadow: 0 10px 25px rgba(124, 58, 237, 0.35);

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 15px 35px rgba(124, 58, 237, 0.5);
  }
`;
