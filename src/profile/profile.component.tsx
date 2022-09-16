import type { FC } from "react";
import { Avatar, Card, Center, CenterYAlign, Chip } from "../components";
import avatar from "../../public/img/profile.jpg";
import { socialLinks } from "../social-links.array";
import { skills } from "../skills.array";
import styled from "styled-components";

const Links = socialLinks.map(({ alt, icon, href, size }) => {
  const Icon = icon;

  return (
    <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
      <Icon height={size} width={size} />
    </a>
  );
});

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
  transition: color ease ${({ theme }) => theme.transitionDelay};
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
    <Center yAlign={CenterYAlign.AROUND}>{Links}</Center>
    <br />
  </Card>
);

export { Profile };
