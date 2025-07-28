export type DishesT = {
  name: string;
  ingredients: string;
  diet: string;
  prep_time: number;
  cook_time: number;
  flavor_profile: string | number;
  course: string;
  state: string | number;
  region: string | number;
  image?: string;
};
