import styled from "styled-components";
import screen from "@configs/media";

export const HeroSection = styled.section`
  display: flex;
  position: relative;
  min-height: 100vh;
  align-items: flex-end;
  padding-bottom: 80px;
`;

export const HeroImage = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: -1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 20%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
`;

export const HeroTitle = styled.h1`
  font-size: 5.5rem;
  font-weight: 900;
  line-height: 100%;
  color: #fff;
  margin-bottom: 1rem;
  letter-spacing: 0.01rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
`;

export const HeroButton = styled.button`
  font-size: 1.5rem;
  font-weight: 400;
  color: #fff;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  max-width: 18rem;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
