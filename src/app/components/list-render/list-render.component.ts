import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { Car } from 'src/app/Car';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = []
  cars: Car[] = []

  animalDetails!: string
  carDetails!: string

  constructor(private listService: ListService) {
    this.getAnimals()
    this.getCars()
  }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `This animal is ${animal.age} years old.`
  }

  showBrand(car: Car): void {
    this.carDetails = `This car is from ${car.brand}.`
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((x) => animal.name !== x.name)
    this.listService.remove(animal.id).subscribe()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe(animals => this.animals = animals)
  }

  getCars(): void {
    this.listService.getAllC().subscribe(cars => this.cars = cars)
  }
}
