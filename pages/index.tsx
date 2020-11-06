import React from "react";
import { ProfileCard } from "../src/ProfileCard";
import { SkillsChips } from "../src/SkillsChips";
import { LinksIcons } from "../src/LinksIcons";
import { Box, Grid } from "@material-ui/core";
import { skills } from "../src/skills.array";
import { socialLinks } from "../src/social-links.array";
import { description, title } from "../src/seo";

const config = { amp: "hybrid" };

const Index: React.FC = () => {
  return (
    <Box>
      <Grid container justify="center" alignItems="center" style={{ height: "100vh" }}>
        <ProfileCard
          title={title}
          subTitle={description}
          imgSrc={"/profile-cropped/profile-cropped_ngn5s8_c_scale,w_914-min.png"}
          imgSize={150}
        >
          <br />
          <SkillsChips skills={skills} />
          <LinksIcons items={socialLinks} />
        </ProfileCard>
      </Grid>
    </Box>
  );
};

export default Index;
export { config };
