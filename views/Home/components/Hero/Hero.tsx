import React, { FC } from "react";
import Image from "next/image";
import { Container } from "@/styles/base/Global.styles";
import {
  HeroSection,
  HeroImage,
  HeroContent,
  HeroDescription,
  HeroTitle,
  HeroButton,
} from "./Hero.style";

const Hero: FC = () => {
  return (
    <>
      <HeroSection>
        <HeroImage>
          <Image
            src="/images/home/hero-image.jpg"
            alt="hero"
            layout="fill"
            objectFit="cover"
          />
        </HeroImage>
        <Container>
          <HeroContent>
            <HeroTitle>Твій ідеальний погляд</HeroTitle>
            <HeroDescription>
              Відкрийте для себе нові можливості
            </HeroDescription>
            <HeroButton>Замовити</HeroButton>
          </HeroContent>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
