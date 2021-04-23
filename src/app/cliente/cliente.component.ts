import { Component, OnInit } from '@angular/core';
import { Pessoas } from './../model/pessoas';



@Component({
  selector: 'dsfo-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  solicitacao: string = 'Gostaria que minha solicitação fosse atendida';
  pessoas: Pessoas = new Pessoas();
}


