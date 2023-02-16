import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient:HttpClient, private router: Router) {
    if(localStorage.getItem('userToken') != null){
      this.saveUserData();
    }
   }
  userData:any = new BehaviorSubject(null)
  saveUserData(){
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:object = jwtDecode(encodedToken)
    this.userData.next(decodedToken); 
  }
  login(userData:object):Observable<any>{
    return this.httpClient.post('https://sticky-note-fe.vercel.app/signin/', userData)
  }
  logout(){
    localStorage.removeItem('userToken')
    this.userData.next(null);
    this.router.navigate(['/login'])
  }
  register(userdata:object):Observable<any>{
    return this.httpClient.post('https://sticky-note-fe.vercel.app/signup/', userdata)
  }

}
