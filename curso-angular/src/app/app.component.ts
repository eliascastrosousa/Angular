import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Elias';
  userData = {
    email: 'joaquin@email.com',
    role: 'Admin',
  }
  
  title = 'curso-angular';
}
