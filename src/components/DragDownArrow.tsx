import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StyledArrow from "./ArrowIcon";

const ArrowWrapper = styled.div<{ visible: boolean }>`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  cursor: pointer;
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
