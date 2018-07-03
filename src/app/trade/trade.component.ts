import { Component, OnInit } from '@angular/core';
import {tradeService} from '../../services/tradeService'; 
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
   isSelected = false;
  constructor(private trdService : tradeService,
  private spinner : NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.trdService.fetchTradeData().subscribe(data =>{
      this.spinner.hide();
    })
  }

  onClick()
  {
    this.isSelected = !this.isSelected;
  }

}
