import { skills } from "./skills.array";

const title = "Ilya Konstantinov";
const description = "Samara Web Frontend Developer";
const keywords: string = [...skills, ...title.split(" "), ...description.split(" ")].join(", ");

export { title, description, keywords };
