import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  UserName: string = "Adam";
  UserLastName: string = "Moran";
  UserBirthday = new Date(1998, 5, 15);
  constructor() { }

  ngOnInit() {
  }

}
