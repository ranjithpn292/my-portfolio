import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowDown } from "react-icons/fa";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0); 
  }
  40% {
    transform: translateY(10px); 
  }
  60% {
    transform: translateY(5px);
  }
`;

const ArrowWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  cursor: pointer;
`;

const StyledArrow = styled(FaArrowDown)`
  font-size: 2rem;
  color: white;
  animation: ${bounce} 2s infinite;
`;

const DragDownArrow: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
    setVisible(false);
  };

  return (
    <ArrowWrapper visible={visible} onClick={handleClick}>
      <StyledArrow />
    </ArrowWrapper>
  );
};

export default DragDownArrow;
