import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.modle";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes : Recipe[] = [
    new Recipe('Pulao','Veggie special' ,
    'https://upload.wikimedia.org/wikipedia/commons/8/86/Homemade_Veg_Pulao.jpg',
    [
      new Ingredient("rice",20),
      new Ingredient("veggies",30)
    ]),
    new Recipe('Veg Biryani','Veggie special Biryani' ,'https://pixahive.com/wp-content/uploads/2020/10/Spicy-veg-biryani-143389-pixahive.jpg',
    [
      new Ingredient("rice",20),
      new Ingredient("veggies",30)
    ]),
    new Recipe('Chapati','Veg' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uf6EaNSqf45NkUe2-Q2m1pd9rYbptJhNIA&usqp=CAU',
    [
      new Ingredient("wheat flour",200),
      new Ingredient("salt",2)
    ])
  ];

  constructor(private shoppingListService : ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipesById(index : number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients :Ingredient[]){
this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())
  }
  updateRecipe(index : number,newRecipe : Recipe){
    this.recipes[index] =  newRecipe
    this.recipeChanged.next(this.recipes.slice())
  }
  deleteRecipe( index : number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
