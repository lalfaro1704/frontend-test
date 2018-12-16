// standard libraries
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  id_preparation: string;
  ingredients: JSON;
  id_lunch: string;
  exclude = [];
  exclutions = [];

  constructor(private route: ActivatedRoute, private apiServices: ApiService, private router: Router) { }

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
    this.id_lunch = id;
    this.apiServices.getPreparationsByLunch(id).subscribe(
      (data) => {
        this.preparations = data;
        this.exclutions = [];
      },
      error => {
        console.log(error);
      }
    );
  }

  getIngredientsByPreparation(id) {
    this.id_preparation = id;
    this.apiServices.getIngredientsByPreparation(id).subscribe(
      (data) => {
        this.ingredients = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ingredientsToExclude(event) {
    let isnew = true;
    if (event.target.checked) {
      for (const exclution of this.exclutions){
        if (exclution.id_preparation === this.id_preparation){
          exclution.ingredients.push(event.target.value);
          isnew = false;
        }
      }
      if (isnew) {
        this.exclutions.push({
          id_preparation: this.id_preparation,
          ingredients: [event.target.value]
        })
      }
    } else {
      for (const exclution of this.exclutions){
        if (exclution.id_preparation === this.id_preparation){
          var index = exclution.ingredients.indexOf(event.target.value);
          if (index !== -1) {
            exclution.ingredients.splice(index, 1);
          }
        }
      }
    }
  }

  submit(user) {
    const body = {
      user: user.value,
      lunch: this.id_lunch,
      exclutions: this.exclutions
    }
    /*const formData = new FormData();
    formData.append('preparation', this.id_preparation);
    formData.append('ingredients', JSON.stringify(this.exclude));*/
    this.apiServices.postOrder(body).subscribe(
      (data) => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
