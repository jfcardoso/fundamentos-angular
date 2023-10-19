import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servico2',
  templateUrl: './exemplo-servico2.component.html',
  styleUrls: ['./exemplo-servico2.component.css']
})
export class ExemploServico2Component {
  product: string = ""

  constructor(public logger: LoggerService){}

  addProduct(){
    this.logger.login(`O produto: ${this.product} foi adicionado com sucesso!`)    
  }
}
