import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes : Recipe[] = [
   new Recipe('Pulao','Veggie special' ,'https://upload.wikimedia.org/wikipedia/commons/8/86/Homemade_Veg_Pulao.jpg'),
   new Recipe('Veg Biryani','Veggie special Biryani' ,'https://pixahive.com/wp-content/uploads/2020/10/Spicy-veg-biryani-143389-pixahive.jpg'),
   new Recipe('Chapati','Veg' ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uf6EaNSqf45NkUe2-Q2m1pd9rYbptJhNIA&usqp=CAU')
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
