import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  contact:Contact=new Contact();
  
  ngOnInit(): void {
   this.contact={
    email:"",
    password:"",
   }
  }
  onSubmission(myForm: any){
    console.log(myForm.value);
    window.alert("Successfully logged in!");
  }

}


export class Contact{
  email:string="";
  password:string="";
}


