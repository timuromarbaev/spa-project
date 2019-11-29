import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BackService } from '../services/back.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private apiService: BackService,
              private router: Router) { }

  addForm: FormGroup;
            
  ngOnInit() {
    this.addForm = this.formBuilder.group ({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
    console.log(this.addForm.value)
    this.apiService.createUser(this.addForm.value)
      .subscribe(data => {this.router.navigate(['main'])
    });
  }
}
