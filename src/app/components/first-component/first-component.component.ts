import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Ronaldo'
  age: number = 21
  job: string = 'Programador'
  hobbies: string[] = ['Correr', 'Jogar', 'Estudar']
  car = {
    name: 'Mustang GT V12',
    brand: 'Ford',
    year: 2022
  }

  constructor() { }

  ngOnInit(): void {
  }

}
