import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { ILink, LinkIcon } from "./LinkIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > a": {
        margin: theme.spacing(2),
      },
    },
  })
);

const links: ILink[] = [
  {
    linkHref: "https://t.me/MarcusRise",
    imgSrc: "/telegram.svg",
    altText: "telegram",
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
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {links.map((i) => (
        <LinkIcon linkHref={i.linkHref} imgSrc={i.imgSrc} altText={i.altText} />
      ))}
    </Grid>
  );
};

export default LinksIcons;
