import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  styles:[`.ng-invalid.ng-touched:not(form){border:1px solid red;}`]
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Send(form: NgForm ){
    console.log("Forms Send");
    console.log(form);
    console.log(form.value);
    
    
  }

}
