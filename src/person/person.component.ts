import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
name;
age;
  persons: Person[] = [];
   constructor(private route: ActivatedRoute, private _router: Router,
     private _location: Location) {
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.age = params['age'];
  });
    console.log('we are in PersonComponent init');
    const person: Person = new Person(this.name, this.age);
    this.persons.push(person);
    console.log(this.persons);
  }

}



