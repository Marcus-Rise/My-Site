import { skills } from "./skills.array";

const title = "Илья Константинов";
const description = "Ведущий веб-разработчик";
const keywords: string[] = [
  ...skills,
  ...title.split(" "),
  ...description.split(" "),
  "Самара",
  "Web",
];

export { title, description, keywords };
