import React from "react";
import { useEffect, useState } from "react";

import { Header, Logo, NavLinks, NavItem, ResumeButton } from "./Navbar.styles";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Header scrolled={scrolled}>
      <Logo>
        Ranjith<span>.</span>
      </Logo>

      <NavLinks>
        <NavItem href="#home">Home</NavItem>

        <NavItem href="#about">About</NavItem>

        <NavItem href="#experience">Experience</NavItem>

        <NavItem href="#skills">Skills</NavItem>

        <NavItem href="#projects">Projects</NavItem>

        <NavItem href="#contact">Contact</NavItem>

        <ResumeButton href="/resume.pdf" target="_blank">
          Resume
        </ResumeButton>
      </NavLinks>
    </Header>
  );
};

export default Navbar;
