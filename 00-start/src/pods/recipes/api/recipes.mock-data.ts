import { Recipe } from './recipes.api-model';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Omelette',
    ingredients: ['2 eggs', 'cheese', 'salt', 'black pepper'],
  },
  {
    id: '2',
    name: 'Salad with tomatoes',
    ingredients: [
      'salad',
      '2 tomatoes',
      '2 avocados',
      '1 tooth garlic',
      '1 onion',
      'lemon juice',
      'salt',
      'pepper',
    ],
  },
  {
    id: '3',
    name: 'Spaghetti with tomato sauce',
    ingredients: [
      'spaghetti',
      '1 beef',
      '1/4 teaspoon garlic powder',
      '1 onion',
      '3 tomatoes',
      '4 mushrooms',
      'oregano',
      'salt',
    ],
  },
];
