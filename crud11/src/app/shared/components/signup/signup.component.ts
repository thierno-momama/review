import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  formSignup: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  get FullName(){
    return this.formSignup.get('fullName');
  }
  get Email(){
    return this.formSignup.get('email');
  }
  get Password(){
    return this.formSignup.get('password');
  }

  onSignUp(){
    this.authService.signUp(this.formSignup.value).subscribe(user => {
      alert(`User : ${this.formSignup.value.fullName} adding success...`);
      this.formSignup.reset();
      this.router.navigate(['login']);

    })
  }

}
