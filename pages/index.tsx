import React from "react";
import ProfileCard from "../src/ProfileCard";
import SkillsChips from "../src/SkillsChips";
import LinksIcons from "../src/LinksIcons";
import { Box, Grid } from "@material-ui/core";

export const config = { amp: true };

const Index: React.FC = () => (
  <Box>
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh" /*, backgroundColor: "#445768"*/ }}
    >
      <ProfileCard
        title="Ilya Konstantinov"
        subTitle="Senior Frontend Web Developer"
        imgSize={150}
      >
        <br />
        <SkillsChips />
        <LinksIcons />
      </ProfileCard>
    </Grid>
  </Box>
);

export default Index;
