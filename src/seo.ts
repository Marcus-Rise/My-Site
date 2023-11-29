import { skills } from "./skills.array";

const title = "Илья Константинов";
const slogan = "Бороться и искать, найти и не сдаваться!";
const description = `
Разрабатываю Frontend приложения с поддержкой SSR на ReactJs, также Backend решения на NodeJs (ExpressJs/NestJs), организовываю процессы CI/CD с помощью Docker, имею опыт управления командами до 7 человек, провожу собеседования.

Применяю трехслойную архитектуру, а также TTD, DDD и DI.

Стремлюсь постоянно изучать новые решения, которые позволят решать потребности заказчика более эффективно.
`;
const descriptionItems = description.split("\n").filter((item) => !!item);
const shortDescription = descriptionItems.join(" ");
const keywords: string[] = [...skills, ...title.split(" "), "Самара", "Web"];

const baseUrl = new URL(process.env.BASE_URL || "http://localhost:3000");

export { title, description, shortDescription, descriptionItems, keywords, slogan, baseUrl };
