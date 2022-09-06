import styled from "styled-components";
import screen from "@/configs/media";
import Link from "next/link";

interface MenuProps {}

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    line-height: 155%;
    color: #fff;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;
