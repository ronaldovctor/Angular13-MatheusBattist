import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: "Turca", type: "Dog", age: 4 },
    { name: "Tom", type: "Cat", age: 2 },
    { name: "Frida", type: "Dog", age: 7 },
    { name: "Bob", type: "Horse", age: 9 }
  ]

  animalDetails!: string

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `This animal is ${animal.age} years old.`
  }

  removeAnimal(animal: Animal): void {
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }
}
