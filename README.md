# Toolbox storybook
[![Deploy Storybook & Package](https://github.com/Crakmedia-Dev/toolbox-storybook/workflows/Deploy%20Storybook%20&%20Package/badge.svg?branch=master&event=push)](https://github.com/Crakmedia-Dev/toolbox-storybook/actions?query=workflow%3A%22Deploy+Storybook+%26+Package%22+event%3Apush+branch%3Amaster)

## Installation

To install the toolbox in your own project, run the following command:
```shell script
yarn add @Crakmedia-Dev/toolbox-storybook --registry=https://npm.pkg.github.com
npm install @Crakmedia-Dev/toolbox-storybook --registry=https://npm.pkg.github.com
```

## Usage example

```javascript
import React from 'react'
import { Button } from '@crakmedia-dev/toolbox-storybook'

const MyButtonComponent = () => (
  <Button onClick={ console.log('button was clicked') }>
    This text will appear inside the button
  </Button>
)

export default MyButtonComponent
```

## Contributing

#### Install storybook dependencies

```shell script
yarn install
npm i
```

#### Launch storybook

```shell script
yarn dev
npm run dev
```

#### Run tests

For a one time run:
```shell script
yarn test
npm run test
```

If you want updated results on every file save, run the following instead:
```shell script
yarn test:watch
npm run test:watch
```

To receive statistics concerning the coverage of the test-suite, run the following:
```shell script
yarn test:coverage
npm run test:coverage
```

#### Serving application for production container

```shell script
yarn serve
npm run serve
```

#### How to prepare a pull request

- Run tests using `yarn test:coverage` to ensure test results show in storybook.
- Build project using `yarn build-storybook` to ensure static version has your changes. 
- Commit your changes.
- Prepare pull request.
