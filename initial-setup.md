## Создать react приложение

```sh
npx create-react-app .
```

## Подключить Sass

```sh
npm install node-sass --save
```

## Подключить Normalize

Подключать в главный index.js: `import 'modern-normalize/modern-normalize.css';`

```sh
npm install modern-normalize
```

## Подключить router, switch, link and navlink

Поместить `<App>` в `<BrowserRouter>...</BrowserRouter>` в index.js

```sh
npm install react-router-dom
```

## Линтинг на пре-коммит

<https://github.com/goitacademy/react-lint-config>

## Деплой приложения на Netlify

- В корне проекта создать файл `netlify.toml` c настройками:

```sh
[build]
publish="build"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

- Далее вводим в терминале следующие команды:

```sh
npm install netlify-cli -g
```

- Затем нам нужно залогиниться в свою учетку (откроется браузер, с
  подтверждением авторизации. Жмем кнопку `Authorize`, и закрываем вкладку). Для
  этого в терминале пишем:

```sh
netlify login
```

- Далее, в файле `package.json` добавим npm-скрипты для деплоя:
  `"predeploy": "npm run build",` и `"deploy": "netlify deploy -p",`
  - Если у Вас в `package.json` еще осталось свойство
    `"homepage": "https://myusername.github.io/my-app",` - его необходимо
    удалить.

## Деплой приложения ghpages

- В `package.json` добавить
  `"homepage": "https://myusername.github.io/my-app",`, например до
  `"dependencies"`
- `npm install --save gh-pages`
- добавить в `package.json` следующие скрипты: `"predeploy": "npm run build",` и
  `"deploy": "gh-pages -d build",`

<https://create-react-app.dev/docs/deployment#github-pages> >
<https://drive.google.com/file/d/1EOewQyS7V9SHsUbbycwgTNqB59jwhFnG/view>

## Полезные npm пакеты:

- <https://www.npmjs.com/package/prop-types>
- <https://www.npmjs.com/package/classnames>
- <https://www.npmjs.com/package/shortid> or
  <https://www.npmjs.com/package/uuid>
- <https://www.npmjs.com/package/axios>
- <https://github.com/mhnpd/react-loader-spinner>

## Useful snipets:

- `imp`→ import moduleName from 'module'
- `imn`→ import 'module' imd→ import { destructuredModule } from 'module'
- `ima`→ import { originalName as aliasName} from 'module'
- `impt`→ import PropTypes from 'prop-types'
- `exp`→ export default moduleName exd→ export { destructuredModule } from
  'module'
- `ss`→ this.setState({ })
- `ssf`→ - this.setState((state, props) => { return {}})
- `cp`→ const { } = this.props
- `cs`→ const { } = this.state
- `cdm`→ componentDidMount() {}
- `cdu`→ componentDidUpdate(prevProps, prevState) {}
- `cwun`→ componentWillUnmount() {}
- `rcc`→ react class component
- `sfc`→ stateless function component

```

```
