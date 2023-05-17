import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Elias'
  age: number = 27
  job = 'programming'

  languages = ['python', 'c#', 'java']

  car = {
    name: 'Onix',
    color: ['vermelho', 'branco'],
    year: 2013


  }

}
