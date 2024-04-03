const packageConfig = require("../package.json");

const metaConfig = {
  title: "Илья Константинов",
  description: `
Разрабатываю Frontend приложения с поддержкой SSR на ReactJs, также Backend решения на NodeJs (ExpressJs/NestJs), организовываю процессы CI/CD с помощью Docker, руковожу командой разработки, провожу собеседования.

Применяю трехслойную архитектуру, а также TTD, DDD и DI.

Стремлюсь постоянно изучать новые решения, которые позволят решать потребности заказчика более эффективно.
`,
  themeColor: {
    light: "#fff",
    dark: "#535667",
  },
  author: {
    name: packageConfig.author.name,
    url: packageConfig.author.url,
  },
};

module.exports = metaConfig;
