import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  model:User=new User();
  confirm_password:string;

  //Validations
  ValidatedForm:boolean=true;
  userNameError:boolean=false;
  passwordError:boolean=false;
  passMatchError=false;
  emailError=false;


  constructor(private data:DataService) { }

  ngOnInit() {
  }

  userValueChanged(){

    this.userNameError=false;
    if(this.model.userName==undefined)
    {
      this.ValidatedForm=false;
      this.userNameError=true;
      return;
    }



    if(this.model.userName.length>3){
      this.userNameError=false;
    }
    else{
      this.userNameError=true;
      this.ValidatedForm=false;
    }

  }

  passwordValueChanged(){
    this.passwordError=false;
    this.passMatchError=false;

    if(this.model.password==undefined)
    {
      this.ValidatedForm=false;
      this.passwordError=true;
      return;
    }

    this.passMatchError=this.model.password!=this.confirm_password;

    if(this.passMatchError){
      this.ValidatedForm=false;      
    }


    if(this.model.password.length>6){
      this.passwordError=false;
    }
    else
    {
      this.passwordError=true;
    this.ValidatedForm=false;
    }
  }

  emailValueChanged(){

    this.emailError=false;
    if(this.model.email==undefined){
      this.ValidatedForm=false;
      this.emailError=true;
      return;
    }

    if(this.model.email.length<8){
      this.ValidatedForm=false;
      this.emailError=true;
    }    

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);




    if(regexp.test(this.model.email)==false){
      this.ValidatedForm=false;
      this.emailError=true;
    }
  }

  
  registerUser(){

    //this.data.sayHello();
    console.log("The user wants to save another user");
    console.log(this.model);

    this.validations();

    if(this.ValidatedForm==false)
    {
      return;
    }

    //save the user into the service
    this.data.saveUser(this.model);
    console.log("User Created");

    //create a new one so user can register more users
    this.model=new User();
    this.confirm_password="";
  }

  validations(){
    this.ValidatedForm=true;
    this.userValueChanged();

    this.passwordValueChanged();
    this.emailValueChanged();
  }

}
