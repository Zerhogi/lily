import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ServiceWrapper,
  ServiceTitle,
  ServicePretitile,
  ServiceImageWrapper,
  ServiceContent,
} from "./Service.style";

interface ServiceProps {
  title: string;
  pretitle: string;
  image: string;
  link: string;
}

const Service: FC<ServiceProps> = ({ title, pretitle, image, link }) => {
  return (
    <>
      <ServiceWrapper>
        <Link href={link} passHref>
          <a>
            <ServiceImageWrapper>
              <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </ServiceImageWrapper>
            <ServiceContent>
              <ServicePretitile>{pretitle}</ServicePretitile>
              <ServiceTitle>{title}</ServiceTitle>
            </ServiceContent>
          </a>
        </Link>
      </ServiceWrapper>
    </>
  );
};

export default Service;
