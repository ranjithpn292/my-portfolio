import { FaArrowDown } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

// Cast FaArrowDown as a valid React component
const StyledArrow = styled(FaArrowDown as unknown as React.ComponentType)`
  font-size: 2rem;
  color: white;
  animation: ${bounce} 2s infinite;
`;

export default StyledArrow;
