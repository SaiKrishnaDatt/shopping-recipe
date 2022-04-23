
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modle";

export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients :Ingredient[] = [
    new Ingredient("Apple",50),
    new Ingredient("Banana",40)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice())

  }
  addIngredients(ingredients : Ingredient[]){
    //note: downside of below code is we emit lot of events
    // for(let ingredient of ingredients){
    //   this.addIngredient(ingredient);
    // }

    //all ingredients to push in one go
    //pushing array of ingredients into list by using spread operator
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
