import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size: number = 16
  font: string = 'Arial'
  color: string = 'blue'

  classes: string[] = ['green-title', 'small-title']
  underline: string = 'underline'

  constructor() { }

  ngOnInit(): void {
  }

}
