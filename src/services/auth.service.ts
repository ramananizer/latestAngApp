import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, delay,map } from 'rxjs/operators';
//import {  of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 //import 'rxjs/add/operator/map';
//import{map} from  'rxjs/operators';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
  
  isLoggedIn(){
    return localStorage.getItem('currentUser') != 'undefined';
  } 

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http : HttpClient, private router : Router){

  }

  login(name : string, pwd : string) : Observable<boolean>{
    //var header = {"Access-Control-Allow-Origin" : true};
    return this.http.post<any>("http://localhost:3000/authenticate",{
      userName : name,
      paasword : pwd
    })
    .pipe(
     map((user:any) =>{
      localStorage.setItem('currentUser', user);
      return true;
    }));
  }

  logout(): void {
    localStorage.setItem('currentUser', undefined);
    this.router.navigate(['/login']);
  }
}