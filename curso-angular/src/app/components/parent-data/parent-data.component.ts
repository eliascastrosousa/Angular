import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent { 

  @Input() name: string = '';
  @Input() userdata!: {email: string; role: string} ;
}
