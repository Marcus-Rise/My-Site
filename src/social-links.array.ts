import telegram from "../public/icons/telegram.svg";
import gitlab from "../public/icons/gitlab.svg";
import github from "../public/icons/github.svg";
import npmjs from "../public/icons/npmjs.png";
import twitter from "../public/icons/npmjs.png";

const socialLinks: ReadonlyArray<{
  linkHref: string;
  imgSrc: string;
  altText: string;
  size: number;
}> = [
  {
    linkHref: "https://t.me/MarcusRise",
    imgSrc: telegram,
    altText: "telegram",
    size: 20,
  },
  {
    linkHref: "https://gitlab.com/marcus_rise",
    imgSrc: gitlab,
    altText: "gitlab",
    size: 20,
  },
  {
    linkHref: "https://github.com/Marcus-Rise",
    imgSrc: github,
    altText: "github",
    size: 35,
  },
  {
    linkHref: "https://www.npmjs.com/~marcus-rise",
    imgSrc: npmjs,
    altText: "npmjs",
    size: 17,
  },
  {
    linkHref: "https://twitter.com/ilykonst95",
    imgSrc: twitter,
    altText: "twitter",
    size: 20,
  },
];

export { socialLinks };
