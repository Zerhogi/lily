import React, { FC } from "react";
import Logo from "../Logo";
import Menu from "./components/Menu";
import Link from "next/link";
import { Container } from "@/styles/base/Global.styles";

import { HeaderComponent, Wrapper } from "./Header.style";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <HeaderComponent>
        <Container>
          <Wrapper>
            <Link href="/" passHref>
              <a>
                <Logo width="250px" height="90px" />
              </a>
            </Link>
            <Menu />
          </Wrapper>
        </Container>
      </HeaderComponent>
    </>
  );
};

export default Header;
