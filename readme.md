# react-testing-excercise

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
