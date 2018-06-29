import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-persondetail',
  templateUrl: './persondetail.component.html',
  styleUrls: ['./persondetail.component.css']
})
export class PersondetailComponent implements OnInit {
  name: string;
  age:number;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        'name':this.name,
        'age': this.age
      }
    };
    this.router.navigate(['person'], navigationExtras);

  }

}
