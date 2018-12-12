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

  onFilterChange(event) {
    console.log(event.target.value);
  }

}
