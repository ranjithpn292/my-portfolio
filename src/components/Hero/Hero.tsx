import React from "react";
import { motion } from "framer-motion";

import profile from "../../assets/images/profile.jpg";

import {
  HeroSection,
  Left,
  Greeting,
  Name,
  Role,
  Description,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  Right,
  ImageWrapper,
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroSection id="home">
      <Left
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Greeting>{"👋 Hello, I'm"}</Greeting>

        <Name>
          Ranjith <span>P N</span>
        </Name>

        <Role>Java Full Stack Engineer</Role>

        <Description>
          Building scalable enterprise applications using React, TypeScript,
          Java 17 and Spring Boot. Currently contributing to enterprise banking
          solutions at DBS Technology Services while developing high-performance
          microservices and modern frontend applications.
        </Description>

        <ButtonGroup>
          <PrimaryButton
            href="https://drive.google.com/file/d/1T3POsbPeucPHNzZ9he1ymmkVz7myeVHG/view?usp=drive_link"
            target="_blank"
          >
            Download Resume
          </PrimaryButton>

          <SecondaryButton href="#projects">View Projects</SecondaryButton>
        </ButtonGroup>
      </Left>

      <Right
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ImageWrapper>
          <img src={profile} />
        </ImageWrapper>
      </Right>
    </HeroSection>
  );
};

export default Hero;
