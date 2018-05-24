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
    country : ""
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
