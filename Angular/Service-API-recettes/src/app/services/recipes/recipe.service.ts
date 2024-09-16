import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Recipe, TrueRecipe } from '../../type';

type RecipeApiResponse = {
  recipes: Recipe[];
};

type TrueRecipeApiResponse = TrueRecipe;

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private apiUrl = 'https://dummyjson.com/recipes';
  constructor(private http: HttpClient) {}

  async fetchRecettes() {
    // post(URL, corps de la requète)
    let observable = this.http.get(
      this.apiUrl
    ) as Observable<RecipeApiResponse>;

    let result = await firstValueFrom(observable); // Transformation de Observable en Promise (pour utiliser async/await)

    let recipes: Recipe[] = [];
    for (let recipe of result.recipes) {
      recipes.push(extractRecipeValues(recipe)); // On extrait les propriétés nécéssaire de la réponse de l'API
    }
    return recipes;
  }

  async fetchTrueRecette(id: number): Promise<TrueRecipe> {
    let observable = this.http.get(
      `${this.apiUrl}/${id}`
    ) as Observable<TrueRecipeApiResponse>;
    let result = await firstValueFrom(observable);

    return extractTrueRecipeValues(result);
  }
}

function extractRecipeValues(prod: Recipe): Recipe {
  return {
    id: prod.id,
    name: prod.name,
    difficulty: prod.difficulty,
    image: prod.image,
  };
}

function extractTrueRecipeValues(prod: TrueRecipe): TrueRecipe {
  return {
    id: prod.id,
    name: prod.name,
    ingredients: prod.ingredients,
    instructions: prod.instructions,
    prepTimeMinutes: prod.prepTimeMinutes,
    cookTimeMinutes: prod.cookTimeMinutes,
    difficulty: prod.difficulty,
    cuisine: prod.cuisine,
    caloriesPerServing: prod.caloriesPerServing,
    tags: prod.tags,
    //userId: prod.id;
    image: prod.image,
    rating: prod.rating,
    reviewCount: prod.reviewCount,
    mealType: prod.mealType,
  };
}
