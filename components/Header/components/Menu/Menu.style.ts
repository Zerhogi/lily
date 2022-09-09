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
    font-weight: 600;
    position: relative;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 0;
      height: 2px;
      background: #fff;
      transition: all 0.3s ease;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
