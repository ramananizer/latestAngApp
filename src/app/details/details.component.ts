import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {tradeService} from '../../services/tradeService'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private trdService : tradeService) {
    this.val = new FormControl(new Date('2018-05-04T18:30:00.000Z'));
   }
 val : any;
  ngOnInit() {
  }

 private _trade : any;
 private _tradeCopy : any;
 @Input()
 get trade() : any{
  return this._trade;
 }
 set trade(val : any){
   this._trade = val;
   this._tradeCopy = JSON.parse(JSON.stringify(val));
 }
  

 @Input()
 inEditMode : boolean;

 @Output()
 saveComplete : EventEmitter<Object> = new EventEmitter<object>();

 isBuy(value){
  return value == "Buy";
 }

 GetDateValue(val)
 {
   return new Date(val);
 }

 tradeDateChange($event){
   this._tradeCopy.tradeDate = $event.value;
 }

 commodityChange($event){
   this._tradeCopy.commodity = $event.target.value;
 }

 quantityChange($event){
   this._tradeCopy.quantity = $event.target.value;
 }

 priceChange($event){
   this._tradeCopy.price = $event.target.value;
 }

 counterpartyChange($event){
   this._tradeCopy.counterparty = $event.target.value;
 }
 
 locationChange($event){
   this._tradeCopy.location = $event.target.value;
 }

 changeSide(val : boolean){
   if(val){
     this._tradeCopy.side="Buy";
   }
   else{
     this._tradeCopy.side="Sell";
   }
}
 

 save(){
   var obs = null;
   obs = this.trdService.updateTrade(this._tradeCopy);
  obs.subscribe((res:any)=>{
    if(!res.success){
      this._tradeCopy = JSON.parse(JSON.stringify(this.trade));
      this.saveComplete.emit('not saved');
    }
    else{
      this.copyObject(this.trade, this._tradeCopy);
      //this.trade = JSON.parse(JSON.stringify(this._tradeCopy));
      this.saveComplete.emit('saved');
    }
  })
 }

 copyObject(target : any, source :any){
   target.tradeDate = source.tradeDate;
   target.commodity = source.commodity;
   target.side = source.side;
   target.quantity = source.quantity;
   target.price = source.price;
   target.counterparty = source.counterparty;
   target.location = source.location;
 }
}
