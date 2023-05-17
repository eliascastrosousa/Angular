import { Animal } from './../../Animal';
import { ListService } from './../../services/list.service';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  showAge: boolean = false;
  
  constructor(private listService: ListService){
    this.getPokemons()
  }
  Animaldetails = ''
  animals: Animal[] = [
    {name: 'turca', type: 'dog', age:2},
    {name: 'mia', type: 'cat', age:1},
    {name: 'galatica', type: 'dog', age:5},
    {name: 'alfredo', type: 'cat', age:7}
  ]

  showAgeMethod(animals: Animal){
    this.Animaldetails = `O pet ${animals.name} tem ${animals.age} anos!`;
  }

  removeAnimal(animal: Animal){
    this.animals = this.listService.remove(this.animals, animal);
    console.log('removendo animal...');
  }

  getPokemons(): void{
    this.listService.getAll().subscribe((animals)=> (this.animals = animals));
  }


}
