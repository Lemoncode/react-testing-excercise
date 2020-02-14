# react-testing-excercise

## Intro

The goal of this excercise is add all necessary tests and testing configuration.

## Excercise

- Install all necessary libs for testing.
- Add `jest` configuration.
- Add `debug` configuration.
- Add mapper tests (`common/mappers/collection.mapper.ts`, `pods/hotel-collection/hotel-collection.mapper.ts`).
- Add `common/components` tests.
- Add `pods/hotel-collection/hotel-collection.hook.ts` tests.
- Add components and containers tests inside pods.

## Optional

- Add `coverage` configuration.
- Add `travis-ci` or `circle-ci` configuration.
- Move some pod to redux and test:
    - `reducers`
    - `actions`
    - `sagas`
    - `selectors`
    - `containers`

## Important

- When configure `jest.json` file, add `alias` configuration using:

```javascript
{
  "rootDir": "../../",
  ...
  "moduleDirectories": ["<rootDir>/src", "node_modules"],
}

```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
