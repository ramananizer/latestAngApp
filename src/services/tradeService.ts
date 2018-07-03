import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
//import {  of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

@Injectable()
export class tradeService
{
    constructor(private http : HttpClient){}

    fetchTradeData(): Observable<object>{
       var foo = Observable.create(function(observer){
           setTimeout(function() {
               observer.next({"name" :"SBI"});
           }, 2000);
       });
       return foo;
    }

}