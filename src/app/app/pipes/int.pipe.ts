import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'int'
})
export class IntPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return Math.round(value);
  }

}
