import telegram from "../public/icons/telegram.svg";
import gitlab from "../public/icons/gitlab.svg";
import github from "../public/icons/github.svg";
import npmjs from "../public/icons/npmjs.png";
import stackoverflow from "../public/icons/stackoverflow.png";

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
    size: 26,
  },
  {
    linkHref: "https://gitlab.com/marcus_rise",
    imgSrc: gitlab,
    altText: "gitlab",
    size: 25,
  },
  {
    linkHref: "https://github.com/Marcus-Rise",
    imgSrc: github,
    altText: "github",
    size: 35,
  },
  {
    linkHref: "https://stackoverflow.com/users/story/8028101",
    imgSrc: stackoverflow,
    altText: "stackoverflow",
    size: 35,
  },
  {
    linkHref: "https://www.npmjs.com/~marcus-rise",
    imgSrc: npmjs,
    altText: "npmjs",
    size: 23,
  },
];

export { socialLinks };
