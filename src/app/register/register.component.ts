import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  contact:Contact=new Contact();
  
  ngOnInit(): void {
   this.contact={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    gender:"",
   }
  }

  onSubmission(myForm: any){
    console.log(myForm.value);
    window.alert("Successfully Registered!");
  }

}
export class Contact{
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string="";
  gender:string="";
  
}