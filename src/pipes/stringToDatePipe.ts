import { Pipe, PipeTransform } from '@angular/core';
import {FormControl} from '@angular/forms';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'stringToDate'})
export class StringToDatePipe implements PipeTransform {
  transform(value: string): any {
    // let exp = parseFloat(exponent);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
    return new FormControl(new Date(value));
  }
}