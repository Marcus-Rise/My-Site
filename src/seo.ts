import { skills } from "./skills.array";

const title = "Илья Константинов";
const description = "Ведущий веб-разработчик";
const keywords: string = [
  ...skills,
  title,
  ...title.split(" "),
  ...description.split(" "),
  "Самара",
  "Web",
].join(", ");

export { title, description, keywords };
