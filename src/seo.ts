import { skills } from "./skills.array";

const title = "Ilya Konstantinov";
const description = "Samara Web Frontend Developer";
const keywords: string = [
  ...skills,
  ...title.split(" "),
  ...description.split(" "),
  "Илья",
  "Константинов",
].join(", ");

export { title, description, keywords };
