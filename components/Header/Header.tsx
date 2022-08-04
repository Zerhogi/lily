import React, { FC } from "react";
import Logo from "../Logo";
import { Container } from "@/styles/base/Global.styles";

import { HeaderComponent } from "./Header.style";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <>
      <HeaderComponent>
        <Container>
          <Logo width="250px" height="90px" />
        </Container>
      </HeaderComponent>
    </>
  );
};

export default Header;
