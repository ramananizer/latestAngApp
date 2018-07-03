import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { map, take }              from 'rxjs/operators';
import{tradeService} from '../services/tradeService';


@Injectable()
export class TradeDataResolver implements Resolve<object> {
  constructor(private ts: tradeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Object> {
    //let id = route.paramMap.get('id');

    return this.ts.fetchTradeData().pipe(
      take(1),
      map(tradeData => {
        if (tradeData) {
          return tradeData;
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return null;
        }
      })
    );
  }
}