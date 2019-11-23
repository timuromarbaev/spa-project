import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.form.value));
  }

}
