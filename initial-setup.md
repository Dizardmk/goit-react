## Сreate-react-app

```sh
npx create-react-app .
```

## Sass

```sh
npm install sass
```

## Normalize

```sh
npm install modern-normalize
```

Подключить `import 'modern-normalize/modern-normalize.css';` в `./index.js`

## BrowserRouter. Switch, Router, Link, Navlink

```sh
npm install react-router-dom
```

В `./index.js` добавить:

```sh
import { BrowserRouter } from 'react-router-dom';
<BrowserRouter> <App /> </BrowserRouter>
```

Структура вложенности, если используете `Redux` -
`Provider > BrowserRouter > App`.

## Redux

```sh
npm i redux
npm i react-redux
```

В `./index.js` добавить:

```sh
import {Provider} from 'react-redux'
<Provider store={store}> <App> </Provider>
```

Структура вложенности, если используете `BrowserRouter` -
`Provider > BrowserRouter > App`.

## Redux Toolkit

```sh
npm install @reduxjs/toolkit
```

## Redux Persist

Используется для работы с `local-storage`.

```sh
npm install redux-persist
```

## Redux DevTools
Расширение для Google Chrome -
[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

Детальнее: [extension.remotedev.io](http://extension.remotedev.io/)

## Линтинг на pre-commit

<https://github.com/goitacademy/react-lint-config>

## Деплой приложения на Netlify

В корне проекта создать файл `netlify.toml` cо следующими настройками:

```sh
[build]
publish="build"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

Далее, вводим в терминале следующую команду:

```sh
npm install netlify-cli -g
```

Теперь нам нужно залогиниться в свою учетку (откроется браузер, с подтверждением
авторизации. Жмем кнопку `Authorize` и закрываем вкладку). Для этого в терминале
пишем:

```sh
netlify login
```

Далее, в файле `package.json` добавим npm-скрипты для деплоя:

```sh
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "netlify deploy -p",
  },
```

Если у Вас в `package.json` еще осталось свойство
`"homepage": "https://myusername.github.io/my-app",` - его необходимо удалить.

## Деплой приложения на Github (не работает с BrowserRouter)

```sh
npm install --save gh-pages
```

В файле `package.json` добавим следующее:

```sh
  "homepage": "https://myusername.github.io/my-app",
  "dependencies": {
    ...
  },
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

Детальнее:
[Create-react-app docs](https://create-react-app.dev/docs/deployment#github-pages)
и
[Видео настройки](https://drive.google.com/file/d/1EOewQyS7V9SHsUbbycwgTNqB59jwhFnG/view)

## Полезные npm пакеты

- <https://www.npmjs.com/package/prop-types>
- <https://www.npmjs.com/package/classnames>
- <https://www.npmjs.com/package/shortid> или
  <https://www.npmjs.com/package/uuid>
- <https://www.npmjs.com/package/axios>
- <https://github.com/mhnpd/react-loader-spinner>

## Полезные сниппеты

Для работы, нужно установить два расширения:
[es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
и
[simple-react-snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

- `imp`→ import moduleName from 'module'
- `imn`→ import 'module'
- `imd`→ import { destructuredModule } from 'module'
- `impt`→ import PropTypes from 'prop-types'
- `imbrc`→ import { Route, Switch, NavLink, Link } from react-router-dom'
- `redux`→ import { connect } from 'react-redux'
- `exp`→ export default moduleName
- `exd`→ export { destructuredModule } from 'module'
- `ss`→ this.setState({ })
- `ssf`→ - this.setState((state, props) => { return {}})
- `cp`→ const { } = this.props
- `cs`→ const { } = this.state
- `props`→ this.props.propName
- `state`→ this.state.stateName
- `cdm`→ componentDidMount() {}
- `cdu`→ componentDidUpdate(prevProps, prevState) {}
- `cwun`→ componentWillUnmount() {}
- `rcc`→ react class component
- `sfc`→ stateless function component
- `rcredux`
- `rfcredux`
