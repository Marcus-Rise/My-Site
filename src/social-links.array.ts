import telegram from "../public/icons/telegram.svg";
import habr from "../public/icons/harb.jpg";
import github from "../public/icons/github.png";
import npmjs from "../public/icons/npmjs.png";
import stackoverflow from "../public/icons/stackoverflow.png";

const socialLinks: ReadonlyArray<{
  linkHref: string;
  imgSrc: string;
  altText: string;
  size: number;
  removeMargin?: boolean;
}> = [
  {
    linkHref: "https://t.me/MarcusRise",
    imgSrc: telegram,
    altText: "telegram",
    size: 26,
  },
  {
    linkHref: "https://career.habr.com/macrus-rise",
    imgSrc: habr,
    altText: "habr",
    size: 26,
  },
  {
    linkHref: "https://github.com/Marcus-Rise",
    imgSrc: github,
    altText: "github",
    size: 60,
    removeMargin: true,
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
