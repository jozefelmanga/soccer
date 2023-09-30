import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
//Player : BE server address
PlayerURL: string = 'http://localhost:8086/api/players';
//httpclient : livreur / bostagi
constructor(private httpClient: HttpClient) {}
//array of objects
getAllPlayers() {
  return this.httpClient.get(this.PlayerURL);
}
//object
getPlayerById(id: number) {
  // return this.httpClient.get(this.PlayerURL+"/"+id)
  return this.httpClient.get(`${this.PlayerURL}/${id}`);
}

//json Object {id:...,scoreOne:....,scoreTwo:....}
addPlayer(Player: any) {
  return this.httpClient.post(this.PlayerURL, Player);
}
//json Object {id:...,scoreOne:....,scoreTwo:....}
editPlayer(PlayerObj: any) {
  return this.httpClient.put(this.PlayerURL, PlayerObj);
}
//object, boolean , string
deletePlayerById(id: number) {
  return this.httpClient.delete(`${this.PlayerURL}/${id}`);
}
}
