import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
  @Input() lastName = "";
  @Output() showName = new EventEmitter();
  name = ""
}
