import styled from "styled-components";

interface HeaderComponentProps {}

export const HeaderComponent = styled.header<HeaderComponentProps>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
