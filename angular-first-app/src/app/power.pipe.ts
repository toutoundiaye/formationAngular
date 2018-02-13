import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, exp: number, multiple?:number): number {
    if(multiple != null){
      return Math.pow(value,exp)*multiple;
    }
    return Math.pow(value, exp);
  }

}
