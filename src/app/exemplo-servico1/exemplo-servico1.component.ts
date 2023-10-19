import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico1',
  templateUrl: './exemplo-servico1.component.html',
  styleUrls: ['./exemplo-servico1.component.css']
})
export class ExemploServico1Component {
  name: string = ""

  // fazendo a injeção do serviço logger para ter acesso a suas funções
  constructor(private logger: LoggerService){}

  addName(){
    this.logger.login(`O nome ${this.name} foi adicionado com sucesso!`)
  }
}
