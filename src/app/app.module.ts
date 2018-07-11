import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, 
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelect,
  MatOption,
  MatFormField,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatRadioModule,
  MatRadioButton,
  MatRadioGroup,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TickerComponentComponent } from './ticker-component/ticker-component.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { HomeComponent } from './home-component/home-component.component';
import {routingModule} from './app.module.routing';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginStatusComponent } from './login-status/login-status.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { TradeComponent, DialogOverviewExampleDialog, DialogYesNo } from './trade/trade.component';
import {TradeDataResolver} from '../route-guards/tradeDataResolver';
import{tradeService} from '../services/tradeService';
import{AuthGuard} from '../route-guards/auth-guard.service';
import { FilterComponent } from './filter/filter.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgGridModule } from 'ag-grid-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faTimes, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DetailsComponent } from './details/details.component';
import{StringToDatePipe} from '../pipes/stringToDatePipe';

library.add(faTrash);
library.add(faTimes);
library.add(faEdit);
library.add(faPlus);

@NgModule({
  declarations: [
    AppComponent,
    TickerComponentComponent,
    TabComponentComponent,
    HomeComponent,
    LoginComponent,
    LoginStatusComponent,
    MenuComponentComponent,
    TradeComponent,
    FilterComponent,
    DetailsComponent,
    StringToDatePipe,
    DialogOverviewExampleDialog,
    DialogYesNo
  ],
  exports :[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule,
    MatRadioModule
  ],
  imports: [
    FormsModule,ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,
    MatInputModule,
    MatRippleModule,MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    BrowserModule,
    routingModule,
    LoginRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    AgGridModule.withComponents([]),
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDialogModule
  ],
  entryComponents :[
    DialogOverviewExampleDialog,
    DialogYesNo
  ],
  providers: [AuthGuard,
    TradeDataResolver,
    tradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
