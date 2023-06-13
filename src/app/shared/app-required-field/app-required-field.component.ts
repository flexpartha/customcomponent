import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-required-field',
  templateUrl: './app-required-field.component.html',
  styleUrls: ['./app-required-field.component.css']
})
export class AppRequiredFieldComponent {

  genderOptions:any = [
    {
      "id":"1",
      "gender":"Male",

    },
    {
      "id":"2",
      "gender":"female",
      
    },
    {
      "id":"3",
      "gender":"Non-binary",
      
    },
    {
      "id":"4",
      "gender":"Gender non-conforming",
      
    },
    {
      "id":"5",
      "gender":"Prefer not to say",
      
    }
  ]

  @Input() nameListfromComponent:any = [];
  @Input() firstName:any;
  @Input() lastName:any;

}
