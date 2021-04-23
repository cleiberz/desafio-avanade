import { Component, OnInit } from '@angular/core';
import { Pessoas} from './../model/pessoas';

@Component({
  selector: 'dsfo-atendente',
  templateUrl: './atendente.component.html',
  styleUrls: ['./atendente.component.css']
})
export class AtendenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  atendenteAoCliente: string = "Sua solicitação será encaminhada para o nosso gerente.  Assim que obtiver uma resposta te aviso.";
  atendenteAoGerente: string = "O cliente necessita que seja resolvida a questão o quanto antes.  Poderia resolver pra mim?"
  pessoas: Pessoas = new Pessoas()
}

