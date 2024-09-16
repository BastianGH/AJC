import { Routes } from '@angular/router';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { RecipeInfoPageComponent } from './pages/recipe-info-page/recipe-info-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'recipes', component: RecipesPageComponent },
  { path: 'recipes/:id', component: RecipeInfoPageComponent },
];
