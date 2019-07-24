import { generatePath } from 'react-router-dom';

interface BaseRoutes {
  recipes: string;
  recipe: string | ((id: string) => string);
}

const baseRoutes: BaseRoutes = {
  recipes: '/',
  recipe: '/recipe',
};

interface SwitchRoutes extends BaseRoutes {
  recipe: string;
}

export const switchRoutes: SwitchRoutes = {
  ...baseRoutes,
  recipe: `${baseRoutes.recipe}/:id`,
};

interface LinkRoutes extends BaseRoutes {
  recipe: (id: string) => string;
}

export const linkRoutes: LinkRoutes = {
  ...baseRoutes,
  recipe: id => generatePath(switchRoutes.recipe, { id }),
};
