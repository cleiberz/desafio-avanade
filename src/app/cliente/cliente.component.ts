import { Pessoas } from './../model/pessoas';
import { Component, Input, OnInit, Output } from '@angular/core';



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


