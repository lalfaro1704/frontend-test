// standard libraries
import { Component, OnInit } from '@angular/core';

// components and services
import { ApiService } from '../../services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menu: JSON;

  constructor(private apiServices: ApiService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    // get active daily menu.
    this.apiServices.getMenu().subscribe(
      (data) => {
        this.menu = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
