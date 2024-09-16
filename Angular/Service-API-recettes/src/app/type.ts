export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
};
export type Credentials = {
  username: string;
  password: string;
  expiresInMins: number;
};

export type Recipe = {
  id: number;
  name: string;
  difficulty: string;
  image: string;
};

export type TrueRecipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  //userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};
