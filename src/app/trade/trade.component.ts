import { Component, OnInit,ViewChild, Inject, ChangeDetectorRef } from '@angular/core';
import {tradeService} from '../../services/tradeService'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { AgGridNg2 } from 'ag-grid-angular';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {
   isSelected = false;
  constructor(private trdService : tradeService, 
              private spinner : NgxSpinnerService,
               public dialog: MatDialog,
               private cdref: ChangeDetectorRef) { 

   //this.agGrid.selectionChanged
  }
  abc($event : any){
    //alert("selected" + $event);
    this.isSelected = true;
  }

  Saved($event){
    //  if(this.isNew){
    //     this.rowData.push(this.selectedRow);
    //     this.dataSource = new MatTableDataSource<object>(this.rowData);
    //     this.cdref.detectChanges();
    //   this.isNew = false;
    //   this.inEditMode = false;
    //  }
      

    var dialogRef =   this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data :{message : $event}  

  });

  dialogRef.afterClosed().subscribe(result => {
     this.getData();
     if(this.isNew == true){
        this.isNew = false;
        this.isSelected = false;
     }
      this.inEditMode = false;
    });
      
  }
  
  

dataSource : any;
displayedColumns: string[];
@ViewChild(MatPaginator) paginator: MatPaginator;
dataSourceArray : object[] = [];
isLoading : boolean;

  ngOnInit() {
     this.displayedColumns= ['tradeDate', 'commodity', 'side', 'quantity', 'price', 'counterparty', 'location', 'delete'];
    this.getData();
  }

  getData(){
    this.spinner.show();
        this.isLoading = true;
        this.trdService.fetchTradeData().subscribe(data =>{
          this.spinner.hide();
          this.isLoading = false;
          this.rowData = data;
          this.dataSource = new MatTableDataSource<object>(this.rowData);
          this.dataSource.paginator = this.paginator;
        })
  }

  onClick()
  {
    this.isSelected = !this.isSelected;
  }
  close(){
    this.isSelected = false;
  }

  columnDefs = [
        {headerName: 'Trade Date', field: 'tradeDate' },
        {headerName: 'Commodity', field: 'commodity' },
        {headerName: 'Side', field: 'side'},
        {headerName: 'Quantity', field: 'quantity'},
        {headerName: 'Price', field: 'price'},
        {headerName: 'Counterparty', field: 'counterparty'},
        {headerName: 'Location', field: 'location'}
    ];
    rowData :any;
    @ViewChild('agGrid') agGrid: AgGridNg2;
    selectedRowId: any ;
    selectedRow : any;

   highlight(row){
     this.selectedRow = row;
    this.selectedRowId = row._id;
    this.isSelected = true;
  }

  delete(element : any){
    var dialogRef =  this.dialog.open(DialogYesNo, {
      width: '250px',
      data :{message : 'Are you sure, you want to delete ?'}  
    });
    
     dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
         this.trdService.deleteTrade(element).subscribe(x =>{
           var dialogRef =   this.dialog.open(DialogOverviewExampleDialog, {
                              width: '250px',
                              data :{message : 'deleted'}});
           dialogRef.afterClosed().subscribe(result => this.getData());                   
         });
      }
      
    });

  }

  inEditMode : boolean;
  edit(){
    this.inEditMode = !this.inEditMode;
  }
  
  isNew : boolean = false;
  add(){
    this.isNew = true;
    this.isSelected = true;
    this.selectedRow = {"tradeDate" : new Date(), "commodity" : "","side" : "", 'quantity':'', 'price' :'', 'counterparty':'', 'location':'' };
    this.inEditMode = true;
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'dialog-yes-no',
  templateUrl: './dialogYesNo.html',
})
export class DialogYesNo {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
