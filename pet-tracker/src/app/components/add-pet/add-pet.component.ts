import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pet } from 'src/app/Pet';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit{

  breed: string = '';
  url: string = '';
  description: string = '';
  favorite: boolean = false;

  @Output() onAddpet: EventEmitter<Pet> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.breed || !this.url || !this.description){
      alert("PLease enter pet you will adding");
      return;
    }

    const newPet: Pet = {
      breed: this.breed,
      url: this.url,
      description: this.description,
      favorite: this.favorite
    }

    this.onAddpet.emit(newPet);

    this.breed = '';
    this.url = '';
    this.description = '';

  }

}
