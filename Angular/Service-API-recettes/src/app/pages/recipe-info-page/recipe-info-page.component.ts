import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe, TrueRecipe } from '../../type';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecipeService } from '../../services/recipes/recipe.service';
//import { recipes as recettes } from '../recipes-page/recipes-page.component';
@Component({
  selector: 'app-recipe-info-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-info-page.component.html',
  styleUrl: './recipe-info-page.component.css',
})
export class RecipeInfoPageComponent {
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  recipes: TrueRecipe[] = [];
  //@Input() recipe!: TrueRecipe;
  recipe!: TrueRecipe;
  @Input() selected = false;

  @Output() select = new EventEmitter();

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = parseInt(params.get('id')!);

      this.recipeService.fetchTrueRecette(id).then((recipe) => {
        this.recipe = recipe;
      });
    });
  }

  selectRecipe() {
    this.select.emit();
  }
}
