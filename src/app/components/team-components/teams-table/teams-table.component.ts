import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css'],
})
export class TeamsTableComponent implements OnInit {
  constructor(
    private router: Router,
    private pService: TeamService,
    private alertService: AlertService
  ) {}
  teams: any = [];

  ngOnInit(): void {
    this.getAllTeams();
  }

  deleteTeam(id: any) {
    this.alertService
      .confirm('Are you sure you want to delete this?')
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.pService.deleteTeamById(id).subscribe(
            (res) => {
              this.alertService.success("team deleted successfuly")
              this.getAllTeams();
            },
            (error) => {
              this.alertService.error("something went wrong")
              console.log('error :', error.message);
            }
          );
        }
      });
  }

  navigateTo(id: any) {
    this.router.navigate(['/addTeam/' + id]);
  }

  getAllTeams() {
    this.pService.getAllTeams().subscribe(
      (data) => {
        this.teams = data;
      },
      (error) => {
        console.log('error :', error.message);
      }
    );
  }
}
