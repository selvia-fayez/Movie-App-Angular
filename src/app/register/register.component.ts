import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsernameValidator } from '../username.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authServ: AuthService, private router:Router){}
  err:string=''
  isLoading:boolean=false
  registerForm: FormGroup = new FormGroup({
    first_name:new FormControl("", [Validators.required]),
    last_name:new FormControl("", [Validators.required, UsernameValidator.cannotContainSpace]),
    email:new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+@[a-z]+(.com)$/)]),
    password:new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    age:new FormControl("", [Validators.required, Validators.min(5), Validators.max(90)]),
  })
  add(registerForm: FormGroup)
  {
    this.isLoading= true
    this.authServ.register(registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading=false
        if (response.message==='success'){  
          this.router.navigate(['/login'])
        }
        else{
          this.err = response.message
        }
      }
    })
  }
}
