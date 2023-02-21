import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/Pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit{

  pets: Pet[] = [];

  constructor(private petService: PetService){}

  ngOnInit(): void {
    this.petService.getPets().subscribe(pet => {
      this.pets = pet;
    });  
  }

  favorite(pet: Pet){
    pet.favorite = !pet.favorite;
    this.petService.favorite(pet).subscribe();
  }

  deletePet(pet: Pet){
    if(confirm("Voulez vous vraiment supprimer ?")){
      this.petService.deletePet(pet).subscribe(() => {
        this.pets = this.pets.filter(p => p.id !== pet.id);
      });
    }
  }

  addpet(pet: Pet){
    this.petService.addpet(pet).subscribe(pet => {
      this.pets.push(pet);
      alert("Pet adding successfully");
    })
  }

}
