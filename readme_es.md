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
