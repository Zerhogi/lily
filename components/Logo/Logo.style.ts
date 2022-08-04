import styled from "styled-components";
import screen from "@/configs/media";

interface LogoWrapperProps {
  width?: string;
  height?: string;
}

export const Wrapper = styled.div<LogoWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
`;
