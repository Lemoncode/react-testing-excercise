# react-testing-excercise

## Intro

The goal of this excercise is add all necessary tests and testing configuration.

## Excercise

- Install all necessary libs for testing.
- Add `jest` configuration.
- Add `debug` configuration.
- Add `pods/recipes/recipes.mappers` tests.
- Add `common/components` tests.
- Add `pods/recipes/hooks` tests.
- Add `pods/recipes/store` tests (actions, reducers, selectors, sagas).
- Add `pods/recipes/recipes.container` tests.
- Add `pods/recipes/selectors` tests.

## Optional

- Add `coverage` configuration.
- Add `travis-ci` or `circle-ci` configuration.
- Add `pods/recipes/components` tests.
- Add `common/mappers/collection` tests.
- Add `common/helpers/flat-items` tests.
- Add `pods/recipes/recipes.business` tests.

## Important

- When configure `jest.json` file, add `alias` configuration using:

```javascript
{
  "rootDir": "../../",
  ...
  "moduleNameMapper": {
    "^common(.*)$": "<rootDir>/src/common/$1",
    "^scenes(.*)$": "<rootDir>/src/scenes/$1",
    "^core(.*)$": "<rootDir>/src/core/$1",
    "^layout(.*)$": "<rootDir>/src/layout/$1",
    "^pods(.*)$": "<rootDir>/src/pods/$1"
  }
}

```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
