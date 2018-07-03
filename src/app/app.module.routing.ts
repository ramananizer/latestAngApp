import{Routes, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HomeComponent} from './home-component/home-component.component';
import{AuthGuard} from '../route-guards/auth-guard.service';
import {TradeComponent} from './trade/trade.component';
import {TradeDataResolver} from '../route-guards/tradeDataResolver';

const appRoutes: Routes = [
  {
    path: 'home',
    canActivate :[AuthGuard],
    component: HomeComponent,
    children :[
               { path: 'trades',
                  canActivate :[AuthGuard],
                  component: TradeComponent,
                  resolve :{
                    trade : TradeDataResolver
                  }
                }
    ]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
 
];


export const routingModule = RouterModule.forRoot(appRoutes);

// @NgModule({
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   exports : [RouterModule.forRoot(appRoutes)],
//   bootstrap: [AppComponent]
// })
// export class AppRoutingModule { }
