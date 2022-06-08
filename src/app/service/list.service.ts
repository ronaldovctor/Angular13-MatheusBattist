import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../Car';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrlAnimals = 'http://localhost:3000/animals'
  private apiUrlCars = 'http://localhost:3001/cars'

  constructor(private http: HttpClient) { }

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiUrlAnimals}/${id}`)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrlAnimals)
  }

  getAllC(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrlCars)
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrlAnimals}/${id}`)
  }
}
