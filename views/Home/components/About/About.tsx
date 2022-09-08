import React, { FC } from "react";
import { Container, SectionTitle } from "@/styles/base/Global.styles";
import Service from "./components/Service";

import {
  AboutSection,
  AboutContainer,
  AboutImage,
  AboutImageRect,
  AboutImageText,
  AboutImageItalic,
  AboutContent,
  AboutContentItalic,
  ServicesWrapper,
} from "./About.style";

const ServicesData = [
  {
    title: "Eyelash Extension",
    pretitle: "Extension",
    image: "/images/home/Eyelash-Extension-400x600.jpeg",
    link: "/services/eyelash-extension",
  },
  {
    title: "Eyelash Lamination",
    pretitle: "Lamination",
    image: "/images/home/Eyelash-Lamination-400x600.jpeg",
    link: "/services/eyelash-lamination",
  },
  {
    title: "Eyelash Tinting",
    pretitle: "Tinting",
    image: "/images/home/Eyelash-Tinting-400x600.jpeg",
    link: "/services/eyelash-tinting",
  },
  {
    title: "Eyelash Removal",
    pretitle: "Removal",
    image: "/images/home/Eyelash-Removal-400x600.jpeg",
    link: "/services/eyelash-removal",
  },
];

const About: FC = () => {
  return (
    <>
      <AboutSection>
        <Container>
          <AboutContainer>
            <AboutImage>
              <AboutImageText>eye lashes</AboutImageText>
              <AboutImageItalic>Studio</AboutImageItalic>
              <AboutImageRect />
            </AboutImage>
            <AboutContent>
              <AboutContentItalic>Про мене</AboutContentItalic>
              <SectionTitle>Про мене</SectionTitle>
              <p>
                Створюю розкішний образ. Зроблю кожну жінку неповторно красивою!
                Професійний майстер, працюю на найякісніших матеріалах і задаю
                стандарти краси!
              </p>
            </AboutContent>
          </AboutContainer>
          <ServicesWrapper>
            {ServicesData.map((service, index) => (
              <Service
                key={index}
                title={service.title}
                pretitle={service.pretitle}
                image={service.image}
                link={service.link}
              />
            ))}
          </ServicesWrapper>
        </Container>
      </AboutSection>
    </>
  );
};

export default About;
