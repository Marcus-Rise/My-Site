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

interface IProps {
  items: readonly ILink[];
}

const LinksIcons: React.FC<Readonly<IProps>> = (props) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      {props.items.map((i) => (
        <LinkIcon linkHref={i.linkHref} imgSrc={i.imgSrc} altText={i.altText} key={i.altText} size={i.size} />
      ))}
    </Grid>
  );
};

export { LinksIcons };
