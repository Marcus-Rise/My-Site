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
      {/* <a
        href="https://samara.hh.ru/resume/7232b828ff05dbba540039ed1f53346a556638"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={hh} alt="hh link" height={iconSize} width={iconSize} />
      </a>*/}
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
