import metaConfig from "@/meta-config.cjs";
import { Github, Habr, Npm, Stackoverflow, Telegram } from "@/components/icons";

const skills = [
  "Typescript",
  "ReactJs",
  "NextJs",
  "VueJs",
  "NuxtJs",
  "Mobx",
  "Sass",
  "PostCSS",
  "Styled components",
  "Jest",
  "Storybook",
  "Webpack",
  "PWA",
  "Electron",
  "NodeJs",
  "Express",
  "NestJs",
  "Docker",
  "Nginx",
  "Traefik",
  "GitLab self-hosted",
  "GitHub Actions",
  "Agile",
  "Scrum",
] as const;

const socialLinks = [
  {
    href: "https://t.me/Ilya_Konstantinov2022",
    icon: Telegram,
    alt: "telegram",
    size: 30,
  },
  {
    href: "https://career.habr.com/ilya-konstantinov2022",
    icon: Habr,
    alt: "habr",
    size: 37,
  },
  {
    href: "https://github.com/Marcus-Rise",
    icon: Github,
    alt: "github",
    size: 50,
  },
  {
    href: "https://stackoverflow.com/users/8028101/ilya-konstantinov",
    icon: Stackoverflow,
    alt: "stackoverflow",
    size: 30,
  },
  {
    href: "https://www.npmjs.com/~marcus-rise",
    icon: Npm,
    alt: "npmjs",
    size: 50,
  },
] as const;

const descriptionItems = metaConfig.description.split("\n").filter((item) => !!item);

const content = {
  slogan: "Бороться и искать, найти и не сдаваться!",
  descriptionItems,
  shortDescription: descriptionItems.join(" "),
  skills,
  keywords: [...skills, ...metaConfig.title.split(" "), "Самара", "Web"],
  socialLinks,
};

export { content };
