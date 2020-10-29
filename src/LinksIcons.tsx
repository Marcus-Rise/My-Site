import React from "react";
import type { Theme } from "@material-ui/core";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import type { ILink } from "./LinkIcon";
import { LinkIcon } from "./LinkIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > a": {
        margin: theme.spacing(2),
      },
    },
  }),
);

const links: ILink[] = [
  {
    linkHref: "https://t.me/MarcusRise",
    imgSrc: "/telegram.svg",
    altText: "telegram",
  },
  {
    linkHref: "https://twitter.com/ilykonst95",
    imgSrc: "/twitter.png",
    altText: "twitter",
  },
  {
    linkHref: "https://github.com/Marcus-Rise",
    imgSrc: "/github.svg",
    altText: "github",
  },
  {
    linkHref: "https://gitlab.com/marcus_rise",
    imgSrc: "/gitlab.svg",
    altText: "gitlab",
  },
  {
    linkHref: "https://www.npmjs.com/~marcus-rise",
    imgSrc: "/npmjs.png",
    altText: "npmjs",
  },
];

const LinksIcons: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      {links.map((i) => (
        <LinkIcon linkHref={i.linkHref} imgSrc={i.imgSrc} altText={i.altText} key={i.altText} />
      ))}
    </Grid>
  );
};

export default LinksIcons;
