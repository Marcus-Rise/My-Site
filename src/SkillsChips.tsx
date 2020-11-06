import React from "react";
import type { Theme } from "@material-ui/core";
import { Chip, createStyles, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

interface IProps {
  skills: readonly string[];
}

const SkillsChips: React.FC<Readonly<IProps>> = (props) => {
  const classes = useStyles();
  const skillsList = props.skills.map((item) => <Chip key={item} label={item} />);

  return (
    <Grid container justify="center" alignItems="center" wrap="wrap" className={classes.root}>
      {skillsList}
    </Grid>
  );
};

export { SkillsChips };
