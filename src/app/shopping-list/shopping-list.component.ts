import { Component, OnInit } from '@angular/core';
import{ Ingredient} from '../shared/ingredient.modle'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :Ingredient[] = [
    new Ingredient("Apple",50),
    new Ingredient("Banana",40)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }

}
