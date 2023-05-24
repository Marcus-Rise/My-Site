import avatar from "./opengraph-image.jpg";
import type { FC } from "react";
import { skills } from "../skills.array";
import { socialLinks } from "../social-links.array";
import { Center, CenterYAlign } from "../components/center";
import { description, title } from "../seo";
import { Chip } from "../components/chip";
import { Avatar } from "../components/avatar";
import styles from "./page.module.scss";

const Links = socialLinks.map(({ alt, icon, href, size }) => (
  <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
    {icon({ height: size, width: size })}
  </a>
));

const Skills = skills.map((value) => (
  <Chip className={styles.skill} key={value}>
    {value}
  </Chip>
));

const Profile: FC = () => (
  <div className={styles.card}>
    <Center>
      <Avatar src={avatar} size={150} alt={title} />
    </Center>

    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>

    <Center wrapItems>{Skills}</Center>
    <Center yAlign={CenterYAlign.AROUND}>{Links}</Center>
  </div>
);

export default Profile;
