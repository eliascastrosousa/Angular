import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent {
  nome: string = 'elias';
  canShow: boolean = false;

  show(): void{
    this.canShow = !this.canShow;
  }

  cars = [
    { nome:'polo', type: 'car', color: 'red', year: 2014},
    { nome:'gol', type: 'car', color: 'gray', year: 2017},
    { nome:'honda', type: 'motocycle', color: 'gray', year: 2021}
  ] 

  buttomshow: boolean = false
  
}
