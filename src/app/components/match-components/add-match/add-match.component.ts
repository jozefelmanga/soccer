import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { MatchService } from 'src/app/services/match.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  addMatchForm!: FormGroup;
  match: any = {};
  id: any;
  title: string = 'add Match';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mService: MatchService,
    private alertService: AlertService
  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title = 'edit match';
      this.getMatchById(this.id);
    }
  }

  addEditMatch() {
    if (this.id) {
      //update match
      //subscribe methode predefini pour recuperer la reponse 
      this.mService.editmatch(this.match).subscribe(
        (res) => {
          console.log('here response from BE after edit :', res);
          this.alertService.success("match updated successfuly")
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      /*let T = JSON.parse(localStorage.getItem('matches') || '[]');
        for (let i = 0; i < T.length; ++i) {
          if (T[i].id === Number(this.id)) {
            T.splice(i, 1, this.match);
            break;
          }
        }
        localStorage.setItem('matches', JSON.stringify(T));
        this.router.navigate(['/tableMatch']);*/
    } else {
      //add match
      console.log(this.match);
      
      this.mService.addMatch(this.match).subscribe(
        (res) => {
          console.log('here response from BE after adding :', res);
          this.alertService.success("match added successfuly")
        },
        (error) => {
          console.error('Error:', error);
        }
      );

      /*  let T = JSON.parse(localStorage.getItem('matches') || '[]');
        // this.match["id"]=this.generateId(T);
        // T.push(this.match)

        //2eme methode
        if (T.length == 0) {
          this.match['id'] = 1;
        } else {
          let last_match = T.pop('matches');
          this.match['id'] = last_match.id + 1;
          T.push(last_match);
        }
        T.push(this.match);

        localStorage.setItem('matches', JSON.stringify(T));
        this.match = {};*/
    }
    this.router.navigate(["tableMatch"])
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

  // get the match with th provided id
  getMatchById(id: any) {
    this.mService.getMatchById(id).subscribe(
      (match) => {
        console.log('Match:', match);
        this.match=match
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    // let T = JSON.parse(localStorage.getItem('matches') || '[]');
    // for (let i = 0; i < T.length; i++) {
    //   if (T[i].id == this.id) {
    //     return T[i];
    //   }
    // }
  }
}
