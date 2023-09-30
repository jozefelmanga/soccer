import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  constructor(private router:Router ,private pService:PlayerService){}
  players: any = [];

  ngOnInit(): void {
   this.getAllPlayers()
  }

  deletePlayer(id: any) {
    this.pService.deletePlayerById(id).subscribe(
      (res)=>{
        this.getAllPlayers()
      }
      ,(error)=>{console.log("error :", error.message);
  })
    
  }

  navigateTo(id:any) {
    this.router.navigate(['/addPlayer/'+id])
  }

  getAllPlayers(){this.pService.getAllPlayers().subscribe((data)=>{this.players=data},(error)=>{console.log("error :", error.message);
})}
  
}
