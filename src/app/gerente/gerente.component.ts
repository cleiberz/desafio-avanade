import { Component, OnInit } from '@angular/core';
import { Pessoas } from '../model/pessoas';

@Component({
  selector: 'dsfo-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.css']
})
export class GerenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gerenteAoAtendente: string = "Pode deixar que até amanhã vou resolver.";
  pessoas: Pessoas = new Pessoas();
}
