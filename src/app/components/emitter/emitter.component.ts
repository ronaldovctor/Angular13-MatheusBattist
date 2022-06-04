import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber!: number

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(): void {
    this.myNumber = Math.ceil(Math.random() * 50)
  }
}
