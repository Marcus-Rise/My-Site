import avatar from "./opengraph-image.jpg";
import type { FC } from "react";
import { skills } from "../skills.array";
import { socialLinks } from "../social-links.array";
import { description, keywords, slogan, title } from "../seo";
import { Chip } from "../components/chip";
import { Avatar } from "../components/avatar";
import styles from "./page.module.scss";
import type { Metadata } from "next";
import { ChipsLimited } from "../components/chips-limited";

const Links = socialLinks.map(({ alt, icon, href, size }) => (
  <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
    {icon({ height: size, width: size })}
  </a>
));
const Skills = skills.map((value) => <Chip key={value}>{value}</Chip>);
const SKILLS_LIMIT = 3;

const descriptionItems = description.split("\n").filter((item) => !!item);
const shortDescription = descriptionItems.join(" ");
const text = descriptionItems.map((item) => (
  <p key={item} className={styles.description}>
    {item}
  </p>
));

const Profile: FC = () => (
  <div className={styles.card}>
    <section className={styles.first}>
      <Avatar src={avatar} size={150} alt={title} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.slogan}>{slogan}</p>
    </section>

    <section className={styles.second}>
      {text}
      <div className={styles.skills}>
        <ChipsLimited limit={SKILLS_LIMIT}>{Skills}</ChipsLimited>
      </div>
      <div className={styles.links}>{Links}</div>
    </section>
  </div>
);

const metadata: Metadata = {
  title,
  description: shortDescription,
  keywords,
  openGraph: {
    title,
    description: shortDescription,
    url: "/",
    type: "profile",
  },
};

export default Profile;
export { metadata };
