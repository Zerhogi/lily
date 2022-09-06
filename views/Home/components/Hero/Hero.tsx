import React, { FC } from "react";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <>
      <Image
        src="/images/home/hero-image.jpg"
        alt="hero"
        width={1920}
        height={1080}
      />
    </>
  );
};

export default Hero;
