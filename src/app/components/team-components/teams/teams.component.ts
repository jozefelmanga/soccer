import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  constructor(private router:Router ,private tService:TeamService){}
  teams: any = [];
  ngOnInit(): void {
    this.tService.getAllTeams().subscribe((data)=>{this.teams=data},(error)=>{console.log("error :", error.message);
  })
  }
}
