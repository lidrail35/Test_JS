npm init -y
npm i -D webpack webpack-cli
npm i -D html-webpack-plugin
npm i -D webpack-dev-server
npm i -D mini-css-extract-plugin
npm i -D css-loader
npm i -D eslint
npm init @eslint/config
npm i -D typescript ts-loader
npm i -D @typescript-eslint/parser (парсер TS для ESlint - чтобы ESlint умел правильно парсить .ts файлы)
npm i -D @typescript-eslint/eslint-plugin (плагин TS для ESlint - правила, по которым ESlint будет проверять .ts файлы)
npm i -D eslint-webpack-plugin (плагин ESlint - для работы ESlint вместе с Webpack)
Настраиваем конфиги
  TS
    npx tsc --init (Создаем файл tsconfig.json)
    Внутри файла tsconfig.json
      Выключить "module": "commonjs" (т.к. сборкой будет заниматься Webpack)
      Включить "strict": true (требование таски)
      Включить "noImplicitAny": true (требование таски)

  ESlint
    В корень добавляем
      "parser": "@typescript-eslint/parser" (чтобы ESlint понимал какой парсер использовать)
    В массив "plugins" добавляем
        "@typescript-eslint" (чтобы ESlint видел плагин TS)
    В массив "extends" добавляем
        "eslint:recommended" (родные правила ESlint - на всякий случай)
        "plugin:@typescript-eslint/recommended" (правила Typescript)
    В массив "rules" добавляем
        "@typescript-eslint/no-explicit-any": 2 (правило, запрещающее использование типа any)


