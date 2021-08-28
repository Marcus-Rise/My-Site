import type { FC } from "react";
import React from "react";
import { Avatar, Card, Center, Chip, SocialLink } from "../components";
import avatar from "../../public/img/profile.jpg";
import { socialLinks } from "../social-links.array";
import { skills } from "../skills.array";
import styled from "styled-components";

const Link = styled.a<{ removeMargin?: boolean }>`
  margin: ${(props) => (props.removeMargin ? "0" : "0 1rem")};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Links = socialLinks.map(({ altText, imgSrc, linkHref, size, removeMargin }) => (
  <Link
    as={SocialLink}
    linkHref={linkHref}
    imgSrc={imgSrc}
    altText={altText}
    key={altText}
    size={size}
    removeMargin={removeMargin}
  />
));

const Skill = styled.span`
  margin: 0.3rem 0.25rem;
`;

const Skills = skills.map((value) => (
  <Skill as={Chip} key={value}>
    {value}
  </Skill>
));

interface IProfileProps {
  description: string;
  title: string;
}

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  line-height: 1.334;
  letter-spacing: 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  margin: 0;
  font-size: 0.9rem;
`;

const Profile: FC<IProfileProps> = ({ title, description }) => (
  <Card>
    <Center>
      <Avatar src={avatar} size={150} alt={title} />
    </Center>
    <br />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <br />
    <Center wrapItems>{Skills}</Center>
    <br />
    <Center>{Links}</Center>
    <br />
  </Card>
);

export { Profile };
