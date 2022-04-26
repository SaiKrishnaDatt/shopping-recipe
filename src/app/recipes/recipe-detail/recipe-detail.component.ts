import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe : Recipe;
id : number;
  constructor(private recipeService :RecipeService,private activatedRoute : ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    //-> below line will work only one time loading
   // const id = this.activatedRoute.snapshot.params['id']

   //but need more than one time load
   //+ sign here is type casting to number from integer
   this.activatedRoute.params.subscribe((params :Params)=>
    {this.id = +params['id'];
    this.recipe = this.recipeService.getRecipesById(this.id);
  }
    );
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute})
    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute})
  }

}
