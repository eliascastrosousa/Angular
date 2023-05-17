import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public cep: string = '02309080';
  
  constructor(
    private http: HttpClient
  ) { }

  getcidades(){
    return this.http.get('https://viacep.com.br/ws/02309080/json/')
  }

  getApiFake(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2')
  }
}
