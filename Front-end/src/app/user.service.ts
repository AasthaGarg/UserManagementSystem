import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8080';

  public addUser(userData: any){
    return this.http.post(this.API+'/addUser',userData);
  }

  public getUser(){
    return this.http.get(this.API+'/getUser');
  }

  public deleteUser(id:any){
    return this.http.delete(this.API+'/deleteUser?id='+id);
  }

  public updateUser(userData:any){
    return this.http.put(this.API+'/updateUser',userData);
  }

}
