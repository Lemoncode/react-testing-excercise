# Laboratorio testing

## Intro

El objetivo de este ejercicio es añadir toda la configuración y tests necesarios sobre un proyecto ya dado.

## Obligatorio

- Instalar librerias necesarias.
- Añadir configuración de `jest`.
- Añadir configuración de `debug`.
- Añadir tests de mapper (`common/mappers/collection.mapper.ts`, `pods/hotel-collection/hotel-collection.mapper.ts`).
- Añadir `common/components` tests.
- Añadir `pods/hotel-collection/hotel-collection.hook.ts` tests.
- Añadir tests de components y containers que están en pods.

## Optional

- Añadir configuración de `coverage`.
- Añadir configuración de `travis-ci` or `circle-ci`.
- Mover algun pod a redux y testear:
    - `reducers`
    - `actions`
    - `sagas`
    - `selectors`
    - `containers`

## Importante

- Cuando se configure el fichero `jest.json`, añadir la configuración de los `alias` usando:

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
