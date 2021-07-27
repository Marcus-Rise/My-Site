import type { FC } from "react";
import React from "react";
import { description, title } from "../src/seo";
import { Profile } from "../src/profile";

const config = { amp: "hybrid" };

const Home: FC = () => <Profile title={title} description={description} />;

export default Home;
export { config };
