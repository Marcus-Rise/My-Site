import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > a": {
        margin: theme.spacing(2)
      }
    }
    /*iconHover: {
                '&:hover': {
                    color: red[800],
                },
            },*/
  })
);

const LinksIcons: React.FC = () => {
  const iconSize = 25;
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <a
        href="https://t.me/MarcusRise"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/telegram.svg"
          alt="telegram link"
          height={iconSize}
          width={iconSize}
        />
      </a>
      <a
        href="https://github.com/Marcus-Rise"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/github.svg"
          alt="github link"
          height={iconSize}
          width={iconSize}
        />
      </a>
      <a
        href="https://gitlab.com/marcus_rise"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/gitlab.svg"
          alt="gitlab link"
          height={iconSize}
          width={iconSize}
        />
      </a>
    </Grid>
  );
};

export default LinksIcons;
