import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Avatar } from "./Avatar";

interface IProps {
  title: string;
  subTitle: string;
  imgSize: number;
  imgSrc: string;
}

const ProfileCard: React.FC<Readonly<IProps>> = (props) => (
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
        {props.subTitle}
      </Typography>
      {props.children}
    </CardContent>
  </Card>
);

export { ProfileCard };
