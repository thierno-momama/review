import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/Pet';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit{

  @Input() pet!: Pet;
  @Output() onFavorite = new EventEmitter(); 
  @Output() onDeletePet: EventEmitter<Pet> = new EventEmitter(); 

  constructor(){}

  ngOnInit(): void {
    
  }

}
