import type { FC } from "react";
import React from "react";
import { Avatar, Card, Center, Chip, SocialLink } from "../components";
import avatar from "../../public/img/profile-cropped.png";
import { socialLinks } from "../social-links.array";
import { skills } from "../skills.array";
import styles from "./profile.module.scss";

const Links = socialLinks.map(({ altText, imgSrc, linkHref, size }) => (
  <SocialLink className={styles.link} linkHref={linkHref} imgSrc={imgSrc} altText={altText} key={altText} size={size} />
));

const Skills = skills.map((value) => (
  <Chip className={styles.skill} key={value}>
    {value}
  </Chip>
));

interface IProfileProps {
  description: string;
  title: string;
}

const Profile: FC<IProfileProps> = ({ title, description }) => (
  <Card>
    <Center>
      <Avatar src={avatar} size={150} alt={title} />
    </Center>
    <br />
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
    <br />
    <Center wrap>{Skills}</Center>
    <br />
    <Center>{Links}</Center>
    <br />
  </Card>
);

export { Profile };
