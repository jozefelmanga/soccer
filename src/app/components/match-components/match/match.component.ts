import { Component, Input ,Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  @Input() match: any;
  @Output() passId = new EventEmitter<any>();
  constructor() {}

  deleteMatch(){
    this.passId.emit(this.match.id);
  }

  compare(a:any,b:any){
    if (a>b) {
      return ["win","green"]
    }
    else if (a<b) {
      return ["loss","blue"]
    }else{
      return ["draw","yellow"]
    }
    // return a > b ? ["win","green"] : a < b ? ["loss","blue"] : ["draw","yellow"];
  }
}
