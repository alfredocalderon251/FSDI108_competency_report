import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:User[]=[];
  constructor() {
    // create a default/admin user
    var user=new User();
    user.userName="admin";
    user.firstName="Admin";
    user.lastName="User";
    user.password="admin123";
    this.users.push(user);
   }

  public sayHello(){
    console.log("Hello from a Service");

  }

  public saveUser(theNewUser){
    //get a user and add it to the array
    this.users.push(theNewUser);

  }

  public getAllUsers(){
    return this.users;
  }
}
