import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/signup';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  formLogin: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  get Email(){
    return this.formLogin.get('email');
  }
  get Password(){
    return this.formLogin.get('password');
  }

  onLogin(){
    this.authService.login().subscribe(user => {
      const currentUser = user.find((u: User) => {
        return u.email === this.formLogin.value.email && u.password === this.formLogin.value.password
      });
      if(currentUser){
        alert("login success...");
        this.formLogin.reset();
        this.router.navigate(['dashboard']);
      }else{
        alert("Not Found");
      }
    }, (error) => console.warn('Something went wrong'));

  }

}
