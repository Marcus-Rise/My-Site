import { skills } from "./skills.array";

const title = "Илья Константинов";
const position = "Ведущий веб разработчик";
const slogan = "Бороться и искать, найти и не сдаваться!";
const description = `
Разрабатываю Frontend приложения с поддержкой SSR на ReactJs, также Backend решения на NodeJs (ExpressJs/NestJs), организовываю процессы CI/CD с помощью Docker, имею опыт управления командами до 7 человек, провожу собеседования.

Стремлюсь постоянно изучать новые решения, которые позволят решать потребности заказчика более эффективно.
`;
const keywords: string[] = [...skills, ...title.split(" "), "Самара", "Web"];

export { title, description, keywords, position, slogan };
