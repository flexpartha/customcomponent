import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  customForm!: FormGroup;

  nameList:any = [];
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
  @Output() dispatchnameList:EventEmitter<any> = new EventEmitter()
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(){
    this.customForm = this.fb.group({
      fstNm: new FormControl(''),
      lstNm: new FormControl(''),
      selectedgender: new FormControl('')
    })
  }
  setFormValue(){
    this.nameList.push(this.customForm.value);
    this.dispatchnameList.emit(this.nameList)
  }
}
