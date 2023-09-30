import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addPlayerForm!: FormGroup;
  team: any = {};
  id: any;
  title: string = 'add team';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tService: TeamService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'edit team';
      this.team = this.getplayerById(this.id);
    }
  }

  addEditTeam() {
    if (this.id) {
      //update team
      this.tService.editTeam(this.team).subscribe(
        (res: any) => {
          console.log('here response from BE after edit :', res);
          this.alertService.success("team updated successfuly")
          this.router.navigate(['tableTeams'])
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    } else {
      //add team

      this.tService.addTeam(this.team).subscribe(
        (res: any) => {
          console.log('here response from BE after adding :', res);
          this.alertService.success("team added successfuly")
          this.team={}
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );

    }
  }

  //generate an id based on the table
  generateId(T: any) {
    let max = 0;
    if (T.length === 0) {
      return max;
    } else {
      for (let i = 0; i < T.length; i++) {
        if (T[i] > max) {
          max = T[i];
        }
      }
      return max + 1;
    }
  }

  // get the team with th provided id
  getplayerById(id: any) {
    this.tService.getTeamById(id).subscribe(
      (team: any) => {
        console.log('team:', team);
        this.team=team;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
