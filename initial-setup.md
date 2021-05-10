#### 1. Создать react приложение

```sh
npx create-react-app .
```

#### 2. Подключить Sass

```sh
npm install node-sass --save
```

#### 3. Подключить Normalize

Подключать в главный index.js: import 'modern-normalize/modern-normalize.css';

```sh
npm install modern-normalize
```

#### 4. Подключить router, switch, link and navlink

Обернуть <BrowserRouter>'ом наш <App> в index.js

```sh
npm install react-router-dom
```

#### 5. Линтинг на пре-коммит

https://github.com/goitacademy/react-lint-config

#### 6. Деплой приложения ghpages

- добавить <"homepage": "https://myusername.github.io/my-app",> в package.json
- `npm install --save gh-pages`
- добавить скрипты в pachage.json: "predeploy": "npm run build", "deploy":
  "gh-pages -d build",

https://create-react-app.dev/docs/deployment#github-pages
https://drive.google.com/file/d/1EOewQyS7V9SHsUbbycwgTNqB59jwhFnG/view

#### 7. Полезные npm пакеты:

- https://www.npmjs.com/package/prop-types
- https://www.npmjs.com/package/classnames
- https://www.npmjs.com/package/shortid or https://www.npmjs.com/package/uuid
- https://www.npmjs.com/package/axios
- https://github.com/mhnpd/react-loader-spinner

#### 8. useful snipets:

- imp→ import moduleName from 'module'
- imn→ import 'module' imd→ import { destructuredModule } from 'module'
- ima→ import { originalName as aliasName} from 'module'
- impt→ import PropTypes from 'prop-types'

- exp→ export default moduleName exd→ export { destructuredModule } from
  'module'

- ss→ this.setState({ })
- ssf→ - this.setState((state, props) => { return {}})

- cp→ const { } = this.props
- cs→ const { } = this.state

- cdm→ componentDidMount() {}
- cdu→ componentDidUpdate(prevProps, prevState) {}
- cwun→ componentWillUnmount() {}

- rcc→ react class component
- sfc→ stateless function component
