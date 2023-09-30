import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string) {
    let reverse=""
    for (let i = 0; i < ch.length; i++) {
      // reverse=reverse+ch[ch.length-i-1]
      reverse=ch[i]+reverse
    }
    return reverse; 
  }

}
