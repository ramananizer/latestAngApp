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
  MatIconModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TickerComponentComponent } from './ticker-component/ticker-component.component';
import { TabComponentComponent } from './tab-component/tab-component.component';
import { HomeComponent } from './home-component/home-component.component';
import {routingModule} from './app.module.routing';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginStatusComponent } from './login-status/login-status.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { TradeComponent } from './trade/trade.component';
import {TradeDataResolver} from '../route-guards/tradeDataResolver';
import{tradeService} from '../services/tradeService';
import{AuthGuard} from '../route-guards/auth-guard.service';
import { FilterComponent } from './filter/filter.component';
import { NgxSpinnerModule } from 'ngx-spinner';

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
    FilterComponent
  ],
  exports :[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatOptionModule
  ],
  imports: [
    FormsModule,
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
    NgxSpinnerModule
  ],
  providers: [AuthGuard,
    TradeDataResolver,
    tradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
