import { skills } from "./skills.array";

const title = "Ilya Konstantinov";
const description = "Lead Web Frontend Developer";
const keywords: string = [
  ...skills,
  ...title.split(" "),
  ...description.split(" "),
  "Samara",
  "Самара",
  "Илья",
  "Константинов",
].join(", ");

export { title, description, keywords };
