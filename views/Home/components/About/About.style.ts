import styled from "styled-components";
import screen from "@configs/media";

export const AboutSection = styled.section`
  padding: 80px 0;
  background: #2c2c2c;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AboutImage = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  padding: 12rem 0px;
  @media ${screen.lp} {
    max-width: 450px;
  }
  @media ${screen.md} {
    max-width: 500px;
  }
`;

export const AboutImageRect = styled.div`
  border: 4px solid #ef86d1;
  width: 90%;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto auto;
`;

export const AboutImageText = styled.p`
  font-size: 6rem;
  line-height: 110%;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.5rem;
  @media ${screen.lp} {
    font-size: 8rem;
  }
  @media ${screen.md} {
    font-size: 9rem;
  }
`;

export const AboutImageItalic = styled.span`
  font-family: "Marck Script";
  font-size: 7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ef86d1;
  opacity: 0.8;
  letter-spacing: -0.5rem;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 40%;
  align-items: center;
  text-align: center;
`;

export const AboutContentItalic = styled.span`
  display: block;
  font-family: "Marck Script";
  font-size: 8rem;
  color: #ef86d1;
  opacity: 0.1;
  letter-spacing: -1rem;
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 30rem;
  @media ${screen.md} {
    font-size: 11rem;
    top: -4rem;
    width: 40rem;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 80px;
`;
