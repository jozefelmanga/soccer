import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css'],
})
export class TableMatchComponent implements OnInit {
  constructor(private router:Router ,private mService:MatchService){}
  matches: any = [];

  ngOnInit(): void {
    this.getAllMatches()
    // this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
  }

  deleteMatch(id: any) {
    this.mService.deleteMatchById(id).subscribe(
      (res)=>{
        this.getAllMatches()
      }
      ,(error)=>{console.log("error :", error.message);
  })
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id === id) {
    //     this.matches.splice(i, 1);
    //     localStorage.setItem('matches', JSON.stringify(this.matches));
    //   }
    // }
  }

  navigateTo(id:any) {
    this.router.navigate(['/addMatch/'+id])
  }


  getAllMatches(){
    this.mService.getAllMatches().subscribe((data)=>{this.matches=data},(error)=>{console.log("error :", error.message);
  })
  }

}
