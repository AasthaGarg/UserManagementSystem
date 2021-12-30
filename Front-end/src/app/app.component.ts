import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserDetails';

  allUsers:any= null;

  userToUpdate:any = {
    fname : "",
    lname : "",
    dob : "",
    city : "",
    mnumber : ""
  };

  constructor(private userService: UserService){
    this.get();
  }

  add(userForm:NgForm){
    this.userService.addUser(userForm.value).subscribe(
      (resp) =>{
        console.log(resp);
        userForm.reset();
        this.get();
      },
      (err) =>{
        console.log(err);
      }
    );
  }

  get(){
    this.userService.getUser().subscribe(
      (resp)=>{
        console.log(resp);
        this.allUsers = resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  delete(user:any){
    this.userService.deleteUser(user.id).subscribe(
      (resp)=>{
        console.log(resp);
        this.get();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  edit(user:any){
    this.userToUpdate = user;

  }

  update(){
    this.userService.updateUser(this.userToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
        document.getElementById("closeModal")?.click();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
