import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
    addPlayerForm!: FormGroup;
    player: any = {};
    id: any;
    title: string = 'add player';
    teams:any =[]
  
    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private pService: PlayerService,
      private TService :TeamService,
      private alertService: AlertService
    ) {}
    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id) {
        this.title = 'edit player';
        this.getplayerById(this.id);
      }
      this.TService.getAllTeams().subscribe((data)=>{this.teams=data},(error)=>{console.log("error :", error.message)});
    }
  
    addEditplayer() {
      if (this.id) {
        //update player
        this.pService.editPlayer(this.player).subscribe(
          (res: any) => {
            console.log('here response from BE after edit :', res);
            this.player=res
            this.router.navigate(['tablePlayers'])
          },
          (error: any) => {
            console.error('Error:', error);
          }
        );
      } else {
        //add player
        // const playerCopy = { ...this.player };
        // playerCopy.team = {id:this.player.team }; 
        const playerCopy = { ...this.player };
        for (let i = 0; i < this.teams.length; i++) {
          if (this.teams[i].id==this.player.team) {
            playerCopy.team = this.teams[i]; 
          }
          
        }
       
        

        console.log(playerCopy);
        this.pService.addPlayer(this.player).subscribe(
          (res: any) => {
            console.log('here response from BE after adding :', res);
            this.alertService.success("player added successfuly")
          },
          (error: any) => {
            console.error('Error:', error);
            this.alertService.error("something went wrong")
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
  
    // get the player with th provided id
    getplayerById(id: any) {
      this.pService.getPlayerById(id).subscribe(
        (player: any) => {
          this.player=player
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }




 