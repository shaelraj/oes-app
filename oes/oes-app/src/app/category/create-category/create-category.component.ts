import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public _category: Category;
  constructor() {
    this._category = new Category();
   }

  ngOnInit() {
  }

  public submit() {
    console.log('Form submitted...');
  }

}
