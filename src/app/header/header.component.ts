import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{  
  islogin : boolean = false
  constructor(private authServ : AuthService){}
  ngOnInit(): void {
    this.authServ.userData.subscribe({ 
      next:()=>{
        if(this.authServ.userData.getValue() != null){
          this.islogin = true
        }
        else{
          this.islogin = false
        }
      }
    })
  }
  Logout(){
    this.authServ.logout();
  }
}
