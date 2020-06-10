import React from "react";
import { Chip, createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

const skills: string[] = [
  "OOP",
  "Typescript",
  "Unit Testing",
  "VueJs",
  "SPA",
  "PWA",
  "Webpack",
  "Sass",
  "PostCSS",
  "Pug",
  "NodeJs",
  "Express",
  "Electron",
  "Docker",
  "Nginx",
  "Git Flow",
  "Scrum",
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

const SkillsChips: React.FC = () => {
  const classes = useStyles();
  const skillsList = skills.map((item) => <Chip key={item} label={item} />);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      wrap="wrap"
      className={classes.root}
    >
      {skillsList}
    </Grid>
  );
};

export default SkillsChips;
