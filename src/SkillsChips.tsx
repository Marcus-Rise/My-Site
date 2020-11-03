import React from "react";
import type { Theme } from "@material-ui/core";
import { Chip, createStyles, Grid, makeStyles } from "@material-ui/core";
import { skills } from "./skills.array";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

const SkillsChips: React.FC = () => {
  const classes = useStyles();
  const skillsList = skills.map((item) => <Chip key={item} label={item} />);

  return (
    <Grid container justify="center" alignItems="center" wrap="wrap" className={classes.root}>
      {skillsList}
    </Grid>
  );
};

export default SkillsChips;
