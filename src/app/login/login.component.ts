import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authServ: AuthService, private router:Router){}
  ngOnInit(): void {
     this.authServ.userData.subscribe({
      next:()=>{
        if(this.authServ.userData.getValue() != null){
          this.router.navigate(['/Home'])
        }
      }
    })
  }
  err:string=''
  isLoading:boolean=false
  loginForm: FormGroup = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+@[a-z]+(.com)$/)]),
    password:new FormControl("", [Validators.required])
  })
  add(loginForm: FormGroup)
  {
    this.isLoading= true
    this.authServ.login(loginForm.value).subscribe({
      next:(response)=>{
        this.isLoading= false
        if (response.message==='success'){ 
        localStorage.setItem('userToken', response.token)
        this.authServ.saveUserData();
        this.router.navigate(['/Home'])
        }
        else{
          this.err = response.message
        }
      }
    })
  }
}
