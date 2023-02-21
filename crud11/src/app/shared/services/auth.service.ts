import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth: string = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  signUp(signup: User): Observable<User>{
    return this.http.post<User>(this.urlAuth+"/signup", signup, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }

  login(): Observable<User[]>{
    return this.http.get<User[]>(this.urlAuth+"/signup");
  }
}
