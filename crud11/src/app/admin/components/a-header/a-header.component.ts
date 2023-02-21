import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-a-header',
  templateUrl: './a-header.component.html',
  styleUrls: ['./a-header.component.css']
})
export class AHeaderComponent {

  @Output() onToggleAdd = new EventEmitter(); 

}
