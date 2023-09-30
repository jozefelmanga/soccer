import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //Team : BE server address
  TeamURL: string = 'http://localhost:8086/api/teams';
  //httpclient : livreur / bostagi
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllTeams() {
    return this.httpClient.get(this.TeamURL);
  }
  //object
  getTeamById(id: number) {
    // return this.httpClient.get(this.TeamURL+"/"+id)
    return this.httpClient.get(`${this.TeamURL}/${id}`);
  }
  
  //json Object {id:...,scoreOne:....,scoreTwo:....}
  addTeam(Team: any) {
    return this.httpClient.post(this.TeamURL, Team);
  }
  //json Object {id:...,scoreOne:....,scoreTwo:....}
  editTeam(TeamObj: any) {
    return this.httpClient.put(this.TeamURL, TeamObj);
  }
  //object, boolean , string
  deleteTeamById(id: number) {
    return this.httpClient.delete(`${this.TeamURL}/${id}`);
  }
  }
