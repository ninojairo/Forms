import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  styles:[`.ng-invalid.ng-touched:not(form){border:1px solid red;}`]
})
export class TemplateComponent implements OnInit {

  usuario:Object={
    fisrtName: null,
    lastName : null,
    email: null,
    country : "",
    profession : "",
    sex: "",
    site: "",
    accept: false
  }

  countrys =[
    {
      id: "CRI",
      name: "Costa Rica"
    },
    {
      id: "COL",
      name: "Colombia"
    },
   ]

  profession =[
    {id: "1",name: "Ing Industrial"},
    {id: "2", name: "Ing Sistemas"},
    {id: "3",name: "Administracion"},
    {id: "4", name: "Chef"},
]

  site: string[]=["Up", "Backward", "Forward"]
  
  
  constructor() { 
    




  }

  ngOnInit() {
  }

  Send(form: NgForm ){
    console.log("Forms Send");
    console.log(form);
    console.log(form.value);
    
    
  }

}
