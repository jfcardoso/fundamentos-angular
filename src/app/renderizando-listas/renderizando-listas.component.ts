import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, name: "Celular XL", description:"Celular bem grande", soldOff: false},
    {id: 2, name: "Celular Normal", soldOff: false},
    {id: 3, name: "Celular Mini", description:"Celular pequeno", soldOff: true}
  ]
}
