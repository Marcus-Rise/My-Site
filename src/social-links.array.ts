import { Github, Habr, Npm, Stackoverflow, Telegram } from "./components";

const socialLinks: ReadonlyArray<{
  href: string;
  icon: Icon;
  alt: string;
  size: number;
}> = [
  {
    href: "https://t.me/MarcusRise",
    icon: Telegram,
    alt: "telegram",
    size: 30,
  },
  {
    href: "https://career.habr.com/macrus-rise",
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
    href: "https://stackoverflow.com/users/story/8028101",
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
];

export { socialLinks };
