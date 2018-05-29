import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  userForm : FormGroup;
  
  defaultUser: Object ={
      completeName: {
        firstName : "defaultName",
        lastName : "lastName"
    
    },
      defaultEmail : "cua@gmail.com"
  }



  constructor() { 

    /*this.userForm = new FormGroup({
      'firstName' : new FormControl('', [Validators.required, Validators.minLength(3)]),
      'lastName' : new FormControl('',  [Validators.required, Validators.minLength(3)]),
      'email' : new FormControl('',     [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),

    })*/

    
    console.log(this.defaultUser);
    this.userForm = new FormGroup({
      'completeName': new FormGroup({
        'firstName' : new FormControl('', [Validators.required, Validators.minLength(3)]),
        'lastName' : new FormControl('',  [Validators.required, Validators.minLength(3)])
      }),

      'defaultEmail' : new FormControl('',     [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'password1': new FormControl('',Validators.required),
      'password2': new FormControl(),
      

    })

    //this.userForm.controls['password2'].setValidators([Validators.required,this.PasswordsEquals])
    this.userForm.controls['password2'].setValidators([Validators.required,this.PasswordsEquals.bind(this.userForm)])
    
    //this.userForm.controls['password2'].setValidators([Validators.required])


    //this.userForm.setValue(this.defaultUser);



  }

  ngOnInit() {
  }

  PasswordsEquals(control:FormControl):any{

    let form: any = this;
    if(control.value !== form.controls['password1'].value){
      //return {noiguales:true}
      
    }
    else{return null}


  }

  sendData(){
    console.log(this.userForm.value);
    console.log(this.userForm);
    
    this.userForm.reset({
      completeName:{
        firstName: "",
        lastName: ""

      },
      email:""
    })

  }

}
