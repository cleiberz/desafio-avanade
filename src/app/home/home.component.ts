import { Component, OnInit} from '@angular/core';
import { Pessoas } from './../model/pessoas';

@Component({
  selector: 'dsfo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
  }
pessoas: Pessoas = new Pessoas()
};




