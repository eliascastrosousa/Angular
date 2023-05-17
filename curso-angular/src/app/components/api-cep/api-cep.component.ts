import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-api-cep',
  templateUrl: './api-cep.component.html',
  styleUrls: ['./api-cep.component.css']
})
export class ApiCEPComponent {

  public cidades: any[] = [];

  constructor(
    private httpService : HttpService
  ) {}

  ngOnInit() {
    this.getcidades()
  }

  getcidades(){
    this.httpService.getcidades().subscribe((data: any) => this.cidades = data.results) 
  }



  
}
