import { Dishes } from '../models/dishes';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(__dirname, '..', 'data', 'indian_food.json');

export const getAllDishes = async (filters?: any): Promise<Dishes[]> => {
  // TODO: Connect with database
  const raw = fs.readFileSync(dataPath, 'utf-8');
  let dishes: Dishes[] = JSON.parse(raw);

  if (filters) {
    dishes = applyFilters(dishes, filters);
  }

  return dishes;
};

function applyFilters(dishes: Dishes[], filters: Partial<Record<string, string | string[]>>): Dishes[] {
  return dishes.filter((dish) => {
    for (const key in filters) {
      const condition = filters[key];
      const dishKey = key as keyof Dishes;
      const dishValue = dish[dishKey];

      if (typeof condition === 'object') {
        for (const op in condition) {          
          const value = condition[op];

          switch (op) {
            case 'eq':
              if (String(dishValue).toLowerCase() !== String(value).toLowerCase()) return false;
              break;
            case 'neq':
              if (String(dishValue).toLowerCase() === String(value).toLowerCase()) return false;
              break;
            case 'gte':
              if (Number(dishValue) < Number(value)) return false;
              break;
            case 'lte':
              if (Number(dishValue) > Number(value)) return false;
              break;
            case 'contains':
              if (key === 'ingredients') {
                const selectedIngredients = new Set(String(value).split(',').map((i) => i.trim().toLowerCase()));
                const availableIngredients = String(dishValue).split(',').map((i) => i.trim().toLowerCase());
                const allIngredientsAvailable = availableIngredients.every((ing) => selectedIngredients.has(ing));
                if (!allIngredientsAvailable) return false;
              } else {
                if (!String(dishValue).toLowerCase().includes(String(value).toLowerCase())) return false;
              }
              break;
            default:
              break;
          }
        }
      } else {
        if (String(dishValue).toLowerCase() !== String(condition).toLowerCase()) return false;
      }
    }
    return true;
  });
}
