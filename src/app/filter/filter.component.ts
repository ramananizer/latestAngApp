import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  fModel : filterModel = new filterModel();
  constructor() { }

  ngOnInit() {
  }

  tradeStartDateChange($event){
   this.fModel.tradeStartDate = $event.value;
 }

  tradeEndDateChange($event){
   this.fModel.tradeEndDate = $event.value;
 }
}

export class filterModel{
 tradeStartDate : Date;
 tradeEndDate : Date;
 commodity : string;
 side : string;
 counterparty : string;
 location : string;
}
