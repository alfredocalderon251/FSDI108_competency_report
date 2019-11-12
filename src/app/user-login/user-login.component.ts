import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';
import { Router} from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  userList:User[]=[];

  userName:string='';
  password:string='';

  userNameError:boolean=false;
  passwordError:boolean=false;
  loginFailed:boolean=false;

  constructor(private data:DataService,private router:Router,private shared:SharedService) {
    this.userList=data.getAllUsers();
   }

  login(){

    if(this.validations()==false){
      return;
    }

    console.log("login button pressed");

    //compare user name and password with those of the userlist

    /**logic
     * Travel the userList array
     * get each element from the array
     * compare the userName and password with those of the element
     * if they match,  send the user to register page, hide the login button
     * else show the login error
     */

     var credsCorrect=false;
     for(var i=0; i<this.userList.length;i++){
       var user=this.userList[i];

       if(user.userName==this.userName && user.password==this.password){
         console.log("Logged in correctly");
         credsCorrect=true;
         this.loginFailed=false;
         this.shared.isUserLoggedIn=true;

         //send the user to register page
         this.router.navigate(['user/new'])
       }

     }

     if(!credsCorrect){
       console.log("Incorrect data");
       this.loginFailed=true;
     }


    
  }

  uservaluechanged(){

    if(this.userName==""){
      this.userNameError=true;
      return;
    }

    if(this.userName.length<3){
      this.userNameError=true;
      return;
    }

    this.userNameError=false;
    return true;
    
  }

  passwordvaluechanged(){
    if(this.password==""){
      this.passwordError=true;
       return false;
    }

    if(this.password.length<6){
      this.passwordError=true;
      return false;
    }

    this.passwordError=false;
    return true;

  }

  validations(){
    var validated=true;
    if(this.uservaluechanged()==false){      
      validated=false;
    }

    if(this.passwordvaluechanged()==false){      
      validated=false;
    }

    if(validated==false){
      return false;
    }
    else
    {
      return true;
    }

    
  }

}
