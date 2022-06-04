import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Ronaldo'
  userData = {
    email: 'usuario@email.com',
    role: 'Admin'
  }

  title = 'angular-13';
}
