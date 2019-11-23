import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sin',
  templateUrl: './form-sin.component.html',
  styleUrls: ['./form-sin.component.css']
})
export class FormSinComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
