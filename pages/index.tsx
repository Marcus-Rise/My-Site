import React from "react";
import { SkillsChips } from "../src/SkillsChips";
import { LinksIcons } from "../src/LinksIcons";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { skills } from "../src/skills.array";
import { socialLinks } from "../src/social-links.array";
import { description, title } from "../src/seo";
import type { ILink } from "../src/LinkIcon";
import { Avatar } from "../src/avatar/avatar.component";
import type { GetStaticProps } from "next";

const config = { amp: "hybrid" };

interface IProps {
  skills: readonly string[];
  socialLinks: readonly ILink[];
  title: string;
  description: string;
  imgSize: string | number;
  imgSrc: string;
}

const getStaticProps: GetStaticProps<IProps> = async () => ({
  props: {
    title,
    description,
    skills,
    socialLinks,
    imgSize: 150,
    imgSrc: "/profile-cropped.png",
  },
});

const Index: React.FC<IProps> = (props) => {
  return (
    <Box>
      <Grid container justify="center" alignItems="center" style={{ height: "100vh" }}>
        <Card style={{ maxWidth: "350px" }}>
          <CardContent>
            <Grid container justify="center" alignItems="center">
              <Avatar src={props.imgSrc} size={props.imgSize} alt={props.title} />
            </Grid>
            <br />
            <Typography align="center" variant="h5" component="h1">
              {props.title}
            </Typography>
            <Typography align="center" variant="body2" component="p" color="textSecondary">
              {props.description}
            </Typography>
            <br />
            <SkillsChips skills={skills} />
            <LinksIcons items={socialLinks} />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Index;
export { config, getStaticProps };
