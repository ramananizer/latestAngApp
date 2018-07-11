import { Injectable } from '@angular/core';

import { Observable, from } from 'rxjs';

//import {  of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import { tap, delay,map,  } from 'rxjs/operators';

@Injectable()
export class tradeService
{
    constructor(private http : HttpClient){}

    fetchTradeData(): Observable<object>{
    //    var foo = Observable.create(function(observer){
    //        setTimeout(function() {
    //            observer.next({"name" :"SBI"});
    //        }, 2000);
    //    });
    //    return foo;
    
    let returnValue : object[]= [];
    return this.http.get("http://localhost:3001/trades");
     }

     updateTrade(trade){
         return this.http.post("http://localhost:3001/trade",trade);
     }

     deleteTrade(trade : any){ 
         return this.http.delete("http://localhost:3001/trade/"+trade._id);
     }

     createTrade(trade : any){
         return this.http.put("http://localhost:3001/trade",trade);
     }

}