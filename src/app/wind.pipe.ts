import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wind'
})
export class WindPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if(value > 337.5 || value < 22.5 ){
      return 'north'
    }
    if(value > 22.5 && value < 67.5 ){
      return 'north-eastern'
    }
    if(value >= 67.5 && value < 112.5 ){
      return 'eastern'
    }
    if(value > 112.5 && value < 157.5 ){
      return 'south-east'
    }
    if(value > 157.5 && value < 202.5 ){
      return 'south'
    }
    if(value > 202.5 && value < 247.5 ){
      return 'south-west'
    }
    if(value > 247.5 && value < 292.5 ){
      return 'west'
    }
    if(value > 292.5 && value < 337.5 ){
      return 'north-west'
    }
  }

}
