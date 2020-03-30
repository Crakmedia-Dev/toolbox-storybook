## Toolbox storybook

#### Install storybook dependencies

```
yarn install
npm i
```

#### Launch storybook

```
yarn dev
npm run dev
```

#### Launch tests

For a one time run, use
```
yarn test
npm run test
```

#### During development, it is recommended to use for watching tests
```
yarn test:watch-coverage
npm run test:watch-coverage
```

#### Serving application for production container
```
yarn serve
npm run serve
```


#### How to prepare a pull request

- Run tests using `yarn test:coverage` to ensure test results show in storybook.
- Build project using `yarn build-storybook` to ensure static version has your changes. 
- Commit your changes.
- Prepare pull request.
