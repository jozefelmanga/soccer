import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 UserURL: string = 'http://localhost:8080/api/users';
 constructor(private httpClient: HttpClient) {}

 signup(userObj:any) {
   return this.httpClient.post(this.UserURL+"/signup" ,userObj);
 }

 login(userObj:any) {
   return this.httpClient.post(this.UserURL+"/login",userObj);
 }
}
