import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return [
      {
      'id':1,
      'imageUrl':'/assets/food1.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    },
    {
      'id':2,
      'imageUrl':'/assets/food2.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    }, {
      'id':3,
      'imageUrl':'/assets/food3.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    }, {
      'id':4,
      'imageUrl':'/assets/food4.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    }, {
      'id':5,
      'imageUrl':'/assets/food5.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    }, {
      'id':6,
      'imageUrl':'/assets/food6.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    }, {
      'id':7,
      'imageUrl':'/assets/food7.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    }, {
      'id':8,
      'imageUrl':'/assets/food8.jpeg',
      'name':"Test",
      "price":10,
      'star':2,
      "favourite":false,
      "cookTime":"40-50",
      tags:['Fast Food'],
      origins:["Cambodia"]
    },
  
  
  
  ];
  }
}
