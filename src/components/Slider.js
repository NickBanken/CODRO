import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === "left" && "10px"};

  right: ${({ direction }) => direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 1s ease-in-out;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${({ bg }) => bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 5rem;
`;

const Title = styled.h1`
  font-size: 7rem;
`;
const Desc = styled.p`
  margin: 5rem 0rem;
  font-size: 2rem;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 2rem;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }

    // if (direction === "left") {
    //   setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    // } else {
    //   setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    // }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosOutlined style={{ fontSize: "1.3rem" }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <Image src={item.img}></Image>
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlined style={{ fontSize: "1.3rem" }} />
      </Arrow>
    </Container>
  );
};
