import { Pessoas} from './../model/pessoas';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsfo-atendente',
  templateUrl: './atendente.component.html',
  styleUrls: ['./atendente.component.css']
})
export class AtendenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  atendenteAoCliente: string = "Sua solicitação será encaminhada para o nosso gerente.  Assim que obtver uma resposta te aviso.";
  atendenteAoGerente: string = "O cliente necessita que seja resolvida a questão o quanto antes.  Poderia resolver pra mim?"
  pessoas: Pessoas = new Pessoas()
}

