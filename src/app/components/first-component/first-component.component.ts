import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Game';

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

  games: Game[] = [
    { name: 'The Witcher 3', release: 2015, developer: 'CD Projekt Red', money: 120000000 },
    { name: 'CS: GO', release: 2012, developer: 'Valve', money: 780000000 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
