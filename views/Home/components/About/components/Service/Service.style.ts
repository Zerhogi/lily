import styled from "styled-components";
import screen from "@configs/media";

export const ServiceImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: -1;
  transition: transform 0.5s ease;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 50px;
  position: relative;
  width: calc(25% - 30px);
  height: 450px;
  overflow: hidden;
  a {
    height: 100%;
    z-index: 2;
    &:hover {
      ${ServiceImageWrapper} {
        transform: scale(1.1);
      }
      ${ServiceContent} {
        color: #ef86d1;
      }
    }
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 900;
  margin-top: auto;
  transition: color 0.5s ease;
`;

export const ServicePretitile = styled.h4`
  font-size: 2.2rem;
  font-family: "Marck Script";
  transition: color 0.5s ease;
`;
