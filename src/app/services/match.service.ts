import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  //match : BE server address
  matchURL: string = 'http://localhost:8086/api/matches';
  //httpclient : livreur / bostagi
  constructor(private httpClient: HttpClient) {}
  //array of objects
  getAllMatches() {
    return this.httpClient.get(this.matchURL);
  }
  //object
  getMatchById(id: number) {
    // return this.httpClient.get(this.matchURL+"/"+id)
    return this.httpClient.get(`${this.matchURL}/${id}`);
  }

  //json Object {id:...,scoreOne:....,scoreTwo:....}
  addMatch(match: any) {
    return this.httpClient.post(this.matchURL, match);
  }
  //json Object {id:...,scoreOne:....,scoreTwo:....}
  editmatch(matchObj: any) {
    return this.httpClient.put(this.matchURL, matchObj);
  }
  //object, boolean , string
  deleteMatchById(id: number) {
    return this.httpClient.delete(`${this.matchURL}/${id}`);
  }
}
