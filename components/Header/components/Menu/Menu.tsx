import React, { FC } from "react";
import Link from "next/link";
import { Nav } from "./Menu.style";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  return (
    <>
      <Nav>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/" passHref>
          <a>Services</a>
        </Link>
        <Link href="/" passHref>
          <a>Gallery</a>
        </Link>
        <Link href="/" passHref>
          <a>Blog</a>
        </Link>
      </Nav>
    </>
  );
};

export default Menu;
