// standard libraries
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// components and services
import { ApiService } from '../../services/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: JSON;
  preparations: JSON;
  ingredients: JSON;
  exclude = [];

  constructor(private route: ActivatedRoute, private apiServices: ApiService) { }

  ngOnInit() {
    this.getMenuById();
  }

  getMenuById() {
    // get menu by id.
    const id = this.route.snapshot.paramMap.get("id");
    this.apiServices.getMenuById(id).subscribe(
      (data) => {
        this.menu = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getPreparationsByLunch(id) {
    this.apiServices.getPreparationsByLunch(id).subscribe(
      (data) => {
        this.preparations = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getIngredientsByPreparation(id) {
    this.apiServices.getIngredientsByPreparation(id).subscribe(
      (data) => {
        console.log(data)
        this.ingredients = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ingredientsToExclude(category, event) {
    var index = this.exclude.indexOf(event.target.value);
    if (event.target.checked) {
        this.exclude.push(event.target.value);
     } else {
        if (index !== -1) {
            this.exclude.splice(index, 1);
        }
    }
  }

}
