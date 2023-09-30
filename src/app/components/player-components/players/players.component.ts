import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  constructor(private router:Router ,private pService:PlayerService){}
  players: any = [];
  ngOnInit(): void {
    this.pService.getAllPlayers().subscribe((data)=>{this.players=data},(error)=>{console.log("error :", error.message);
  })
  }
}
