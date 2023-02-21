import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Pet';


const httpOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url: string = "http://localhost:5000/pets";
  

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.url);
  }

  favorite(pet: Pet): Observable<Pet>{
    const urlFavorite = `${this.url}/${pet.id}`;
    return this.http.put<Pet>(urlFavorite, pet, httpOption);
  }

  deletePet(pet: Pet): Observable<Pet>{
    const urlDelete = `${this.url}/${pet.id}`;

    return this.http.delete<Pet>(urlDelete);
  }

  addpet(pet: Pet): Observable<Pet>{
    return this.http.post<Pet>(this.url, pet, httpOption);
  }
}
