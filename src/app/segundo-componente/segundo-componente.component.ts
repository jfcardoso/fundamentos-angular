import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {

  nome = "John Wick";
  dataNascimento = "1979-10-02"
  urlImagem = "/assets/John-Wick.jpg"

  mostrarDataNasc(){
    alert(`A data de nascimento de ${this.nome} é ${this.dataNascimento}.`)
  } 
}
