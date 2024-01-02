import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-cad',
  templateUrl: './user-cad.component.html',
  styleUrls: ['./user-cad.component.scss'],
})
export class UserCadComponent{
  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() description: string="";//parametro de descripción recibe un texto
  @Input() user: string="";//parametro de descripción recibe un texto
  constructor() { }
  ngOnInit() {}
}
