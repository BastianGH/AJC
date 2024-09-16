import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipes/recipe.service';
import { Recipe, TrueRecipe } from '../../type';
import { CommonModule } from '@angular/common';
import { RecipeInfoPageComponent } from '../recipe-info-page/recipe-info-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipes-page',
  standalone: true,
  imports: [CommonModule, RecipeInfoPageComponent, RouterModule],
  templateUrl: './recipes-page.component.html',
  styleUrl: './recipes-page.component.css',
})
export class RecipesPageComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}
  loading = true;

  ngOnInit() {
    this.recipeService.fetchRecettes().then((recipes) => {
      //this.loading = true;
      console.log('ngOnInit');
      this.recipes = recipes;
      this.loading = false;
    });
  }

  selected?: Recipe;

  select(recipe: Recipe) {
    if (this.selected == recipe) this.selected = undefined;
    else this.selected = recipe;
  }
}
